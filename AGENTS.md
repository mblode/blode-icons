# blode-icons

SVG icon library with a React component package. Turborepo monorepo.

## Structure

- `packages/blode-icons-react` — React icon components (published to npm)
- `apps/docs` — Documentation site

## Commands

- `npm install` — Install dependencies
- `npm run build` — Build all packages (`turbo run build`)
- `npm run dev` — Start dev servers (`turbo run dev`)
- `npm run lint` — Lint all packages (`turbo run lint`)
- `npm run lint:fix` — Auto-fix lint issues
- `npm run check` — Check formatting (`ultracite check`)
- `npm run fix` — Fix formatting (`ultracite fix`)
- `npm run check:types` — TypeScript type checking
- `npm run release` — Build blode-icons-react + publish with changesets

## Changesets

This project uses [changesets](https://github.com/changesets/changesets) for versioning and publishing.

- `npm run changeset` — Create a new changeset before merging
- `npm run changeset:version` — Apply changesets to bump versions
- IMPORTANT: Always create a changeset for user-facing changes to `packages/blode-icons-react`

## Code Quality

Uses Ultracite (Biome) for linting and formatting. Run `npm run fix` before committing. Husky pre-commit hooks enforce this.

## Gotchas

- IMPORTANT: `npm run release` only builds `blode-icons-react` (via `--filter=blode-icons-react`), not the docs app
- This is a turborepo — run commands from root, not from individual packages
- Husky is configured via `prepare` script — runs on `npm install`
