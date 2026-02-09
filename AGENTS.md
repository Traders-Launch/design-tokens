# Repository Guidelines

## Read First

- Start with `CLAUDE.md` and `README.md` in this repo.
- Baseline cross-repo rules (Connor ecosystem): `~/personal/life-os/AGENTS.md` (if available).

## Release Safety

- Changes here affect multiple TL web properties. Test in at least one consuming repo before releasing.
- Releases are git-tag driven. Use `npm run release:*` (pushes tags with `--follow-tags`).
- No secrets in this repo.

## Operating Hygiene

- Keep changes small and explicit (tokens are global surface area).

