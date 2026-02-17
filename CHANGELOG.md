# blode-icons-react

## 0.3.0

### Minor Changes

- d4b17b5: Add lucide-react export parity with icons/\*, dynamic, and dynamicIconImports subpaths

  - Individual icon files now wrap with `createLucideIcon` at build time
  - Simplified `all-icons.ts` to use re-exports
  - Added `DynamicIcon` component at `blode-icons-react/dynamic`
  - Added `dynamicIconImports` for lazy-loaded icon imports
  - Added cache `FORMAT_VERSION` to bust stale builds
  - Updated `package.json` exports field

### Patch Changes

- 4e73590: Rename fingertipName to blodeName across build scripts and mappings

## 0.2.0

### Minor Changes

- c06db30: Add Lucide-compatible Icon, Filled, and FilledIcon aliases for all mapped icons and add OctagonX mapping

## 0.1.3

### Patch Changes

- 05fffbd: Lucide

## 0.1.2

### Patch Changes

- 6abc290: Auto-generate filled aliases for outline icons missing a filled variant

## 0.1.1

### Patch Changes

- 5f34d05: Initial
