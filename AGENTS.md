# blode-icons

SVG icon library with a React component package. Turborepo monorepo.

## Structure

- `packages/blode-icons-react` — React icon components (published to npm)
- `apps/docs` — Documentation site

## Cohorts

`packages/blode-icons-react/icons-data/_cohorts.json` states which icons swap for
each other, so they can be checked for a shared bounding box — a swap across
disagreeing extents makes the icon jump in place. It maps a cohort name to its
members; `#filled` keys are the filled style of the same family, which never
swaps with the outline one. Keys prefixed `solo:` are single-member entries: a
deliberate statement that an icon sharing a name prefix with a family is *not* in
it (`desk-lamp` is not a `desk-office` variant), because the checker infers a
cohort from the name prefix for anything the file leaves out.

```bash
npx tsx ../icon-forge/src/cli.ts lint \
  --dir packages/blode-icons-react/icons-svg \
  --cohorts packages/blode-icons-react/icons-data/_cohorts.json
```

Membership is behavioural, not lexical: two icons are in one cohort when one
replaces the other in the same UI slot — toggle states, enumerations, a status
set sharing a container. A shared noun is not enough. Direction sets that are
rotations of one glyph (`arrow-up`/`arrow-left`) are left out on purpose: their
x and y extents transpose, which the per-axis check reads as disagreement.

## Commands

- `npm install` — Install dependencies
- `npm run build` — Build all packages (`turbo run build`)
- `npm run dev` — Start dev servers (`turbo run dev`)
- `npm run lint` — `ultracite check` (Oxlint + Oxfmt)
- `npm run format` — `ultracite fix`
- `npm run check:types` — TypeScript type checking (`turbo run check:types`)
- `npm run release` — Build blode-icons-react + publish with changesets

## Changesets

This project uses [changesets](https://github.com/changesets/changesets) for versioning and publishing.

- `npm run changeset` — Create a new changeset before merging
- `npm run changeset:version` — Apply changesets to bump versions
- IMPORTANT: Always create a changeset for user-facing changes to `packages/blode-icons-react`

## Code Quality

Uses Ultracite (Oxlint + Oxfmt) for linting and formatting. Run `npm run format` before committing. Lefthook pre-commit hooks enforce this.

## Gotchas

- IMPORTANT: `npm run release` only builds `blode-icons-react` (via `--filter=blode-icons-react`), not the docs app
- This is a turborepo — run commands from root, not from individual packages
- Lefthook is configured via `prepare` script — runs on `npm install`

## Agent skills

`skills/blode-icons-react` guides work on the `blode-icons-react` package: import paths, docs examples, export changes, and release conventions. Install it with:

```bash
npx skills add mblode/blode-icons -g --all -y
```
