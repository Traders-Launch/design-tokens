# Traders Launch Design Tokens

Shared colors, typography, and gradients for TL web properties.

## Install

Recommended (GitHub tag):

```bash
npm install --save "github:Traders-Launch/design-tokens#v0.1.0"
```

Local iteration (file dependency):

```bash
npm install --save "file:../../design-tokens"
```

## CSS Tokens

Import once at the top of your global stylesheet:

```css
@import "@traderslaunch/design-tokens/tokens.css";
```

## Tailwind

```ts
import { tailwindTheme } from "@traderslaunch/design-tokens/tailwind";

export default {
  theme: {
    extend: {
      ...tailwindTheme,
    },
  },
};
```

## JS Tokens

```js
import { TL_COLORS, TL_FONT, TL_GRADIENTS } from "@traderslaunch/design-tokens";
```

## Release

1) Run `npm run release:patch` (or `release:minor` / `release:major`).
2) Push tags: `git push --follow-tags`.
3) GitHub Actions will create a release from the tag.

Consumers then bump the tag in `package.json` and run `npm install`.
