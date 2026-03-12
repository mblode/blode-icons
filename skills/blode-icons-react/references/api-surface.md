# API Surface

## Public Entrypoints

- `blode-icons-react`
  Exports the full icon library as named components with the `Icon` suffix, Lucide-compatible aliases from the mapping file, and the `LucideProps` and `LucideIcon` types.
- `blode-icons-react/icons/<kebab-name>`
  Exports a single icon component as the default export for that file.
- `blode-icons-react/dynamic`
  Exports `DynamicIcon` for client-side lazy loading by export name.
- `blode-icons-react/dynamicIconImports`
  Exports the generated import map keyed by root export names.

## Naming Rules

- Full-library exports use PascalCase with the `Icon` suffix, for example `SearchIcon`, `AirplaneIcon`, or `ChevronDownIcon`.
- Lucide-compatible aliases come from `packages/blode-icons-react/scripts/lucide-mapping.ts` and omit the suffix, for example `Search` or `ChevronDown`.
- `DynamicIcon` names come from the keys in `dynamicIconImports`, so both mapped aliases and full `*Icon` names can appear there.
- Individual icon file paths are kebab-case, for example `blode-icons-react/icons/airplane`.

## Public API Files To Check

When validating or changing the API, inspect these files first:

- `packages/blode-icons-react/package.json` for exported subpaths
- `packages/blode-icons-react/scripts/build.mjs` for generated wrappers and dynamic import behavior
- `packages/blode-icons-react/src/all-icons.ts` or `packages/blode-icons-react/dist/all-icons.d.ts` for actual root exports
- `packages/blode-icons-react/dist/dynamicIconImports.js` for real dynamic keys

## Canonical Import Shapes

```tsx
import { SearchIcon, type LucideProps } from "blode-icons-react"
import AirplaneIcon from "blode-icons-react/icons/airplane"
import { DynamicIcon } from "blode-icons-react/dynamic"
import dynamicIconImports from "blode-icons-react/dynamicIconImports"
```
