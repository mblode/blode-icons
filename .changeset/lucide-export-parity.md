---
"blode-icons-react": minor
---

Add lucide-react export parity with icons/*, dynamic, and dynamicIconImports subpaths

- Individual icon files now wrap with `createLucideIcon` at build time
- Simplified `all-icons.ts` to use re-exports
- Added `DynamicIcon` component at `blode-icons-react/dynamic`
- Added `dynamicIconImports` for lazy-loaded icon imports
- Added cache `FORMAT_VERSION` to bust stale builds
- Updated `package.json` exports field
