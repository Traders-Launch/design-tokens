import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { renderIndexJs, renderTailwindJs, renderTokensCss } from "./render.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");

async function writeFile(relativePath, contents) {
  const abs = path.join(repoRoot, relativePath);
  await fs.writeFile(abs, contents, "utf8");
}

await writeFile("tokens.css", renderTokensCss());
await writeFile("tailwind.js", renderTailwindJs());
await writeFile("index.js", renderIndexJs());

console.log("Generated: tokens.css, tailwind.js, index.js");

