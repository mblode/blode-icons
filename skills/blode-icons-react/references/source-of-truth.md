# Source Of Truth

Use this file when repo docs, examples, or habits disagree.

## Precedence

1. Public package implementation:
   `packages/blode-icons-react/package.json`,
   `packages/blode-icons-react/scripts/build.mjs`,
   `packages/blode-icons-react/src/all-icons.ts`,
   `packages/blode-icons-react/dist/*`
2. Docs app install and usage UI:
   `apps/docs/app/installation/page.tsx`,
   `apps/docs/components/getting-started.tsx`,
   `apps/docs/components/install-tabs.tsx`
3. Repo conventions:
   `AGENTS.md`
4. READMEs:
   `packages/blode-icons-react/README.md`,
   `README.md`

## Current Drift And Known Pitfalls

- `apps/docs/README.md` is boilerplate from `create-next-app` and should not be treated as product or install guidance
- `DynamicIcon` names should be validated against the generated import map, which uses export keys such as `Search`, `SearchIcon`, or `AirplaneIcon`
- Individual `blode-icons-react/icons/*` subpaths export a default component, not named exports
- Not every icon has a suffix-free Lucide alias; verify the root export or mapping before using one in docs examples

## Defaults

- If a README conflicts with generated output, prefer the generated output
- If docs snippets conflict with `package.json` exports, prefer the exported public subpaths
- If Lucide compatibility claims drift, prefer `scripts/lucide-mapping.ts` and the generated wrapper logic over marketing copy
