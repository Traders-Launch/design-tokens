# TL Design Tokens — Claude Code Instructions

## Git Workflow

**Branch:** `main`.

**Remote:** `origin` -> `Traders-Launch/design-tokens`

## Package

Published as `@traderslaunch/design-tokens` (npm/GitHub).

## Verification (Required Before PR)

```bash
npm install
npm run check
```

```bash
# Install in consuming repos
npm install github:Traders-Launch/design-tokens#v0.1.1
```

## Releasing

```bash
npm run release:patch   # bump + push tags
npm run release:minor
npm run release:major
```

## Structure

- `index.js` — Color palette, font families, gradients (JS exports)
- `tailwind.js` — Tailwind CSS plugin (extends theme with TL tokens)
- `tokens.css` — CSS custom properties version
- `assets/fonts/ginora_sans/` — Ginora Sans font files

## Usage in Consumer Repos

```js
// tailwind.config.js
import tlTokens from '@traderslaunch/design-tokens/tailwind';
export default { plugins: [tlTokens] };

// Direct import
import { colors, fonts, gradients } from '@traderslaunch/design-tokens';
```

## Notes

- Changes here affect all TL web properties. Test in consuming repos before releasing.
- `git push --follow-tags` ensures GitHub Action release workflows trigger.
- No secrets in this repo.
