import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { renderIndexJs, renderTailwindJs, renderTokensCss } from "./render.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");

async function readFile(relativePath) {
  const abs = path.join(repoRoot, relativePath);
  return fs.readFile(abs, "utf8");
}

function assertEqual(name, expected, actual) {
  if (expected === actual) return;
  // Keep output short but actionable (CI-friendly).
  throw new Error(
    `${name} is out of date. Run: npm run generate\n\n` +
      `First mismatch at index: ${firstMismatchIndex(expected, actual)}`
  );
}

function firstMismatchIndex(a, b) {
  const len = Math.min(a.length, b.length);
  for (let i = 0; i < len; i++) {
    if (a[i] !== b[i]) return i;
  }
  if (a.length !== b.length) return len;
  return -1;
}

assertEqual("tokens.css", renderTokensCss(), await readFile("tokens.css"));
assertEqual("tailwind.js", renderTailwindJs(), await readFile("tailwind.js"));
assertEqual("index.js", renderIndexJs(), await readFile("index.js"));

console.log("OK: generated files are up to date");

