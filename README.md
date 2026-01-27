# Traders Launch Design Tokens

Shared colors, typography, and gradients for TL web properties.

## Install

Use a local file dependency while iterating:

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

- `npm run release:patch` (or `release:minor` / `release:major`)
- Consumers run `npm install` to pick up the new version.

If you plan to publish to a registry, remove `private` (if added) and configure `publishConfig`.
