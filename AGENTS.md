# Repository Guidelines

## Purpose & Scope

- Shared TL design tokens (CSS variables + theme helpers). Used across TL web properties.
- Global surface area: a small token change can ripple across multiple apps.

## Read First

- `CLAUDE.md` and `README.md`
- Connor machine baseline: `~/personal/life-os/AGENTS.md` and `~/.claude/CLAUDE.md`

## Safety / Non-Negotiables

- Never commit secrets (this repo should not have any).
- Prefer backwards-compatible changes. Avoid renaming/removing tokens without a coordinated rollout.

## Workflow

- Branch off `main`. Land via PR into `main`.
- Releases are git-tag driven via `npm version` and `git push --follow-tags` (see `package.json` scripts).

## Verification (Minimum)

- `npm run check` (required before PR)
- Test in at least one consuming repo before releasing (e.g. TL-website or user-dashboard).
- For visual changes, capture a quick before/after screenshot in the consuming app.

## Notes

- Keep changes small and explicit. Tokens are a shared API.
