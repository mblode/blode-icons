# Repo Conventions

## Monorepo Structure

- `packages/blode-icons-react`
  Published npm package and the only package built by `npm run release`
- `apps/docs`
  Docs site for browsing icons and showing installation and usage examples

## Root Commands

Run repo commands from the monorepo root:

```bash
npm install
npm run build
npm run dev
npm run lint
npm run check
npm run fix
npm run check:types
```

## Release And Versioning

- User-facing changes to `packages/blode-icons-react` need a changeset before merge
- `npm run release` runs `turbo run build --filter=blode-icons-react && changeset publish`
- The release command does not build or deploy the docs app

## Implementation Notes

- `packages/blode-icons-react/scripts/build.mjs` generates support files, icon components, aliases, and `dynamicIconImports`
- Public package guidance should be based on exports and generated output, not private `src/*` paths
- The install page at `apps/docs/app/installation/page.tsx` renders `apps/docs/components/getting-started.tsx`, which is where the live install and usage snippets actually come from
