# blode-icons-react

## 0.4.0

### Minor Changes

- 30d67fd: Add ~520 new icons from Central (now ~2,000 base icons / ~4,000 components), each with category and keyword metadata. Backfill search keywords for ~1,290 previously-untagged icons so every icon is now searchable by synonyms and use-cases (e.g. "flight" finds airplane, "delete" finds trash). Adds a `scrape` pipeline that re-syncs from centralicons.com, plus `validate` and `validate:icons-data` gates that run before builds to catch malformed SVGs, component-name collisions, and bad metadata. Documents `optimizePackageImports` for faster Next.js builds.

## 0.3.10

### Patch Changes

- c163d6d: Add people-square and people-square-filled icons

## 0.3.9

### Patch Changes

- 9add1db: Disable sourcemaps to fix "Sourcemap points to missing source files" warnings in consuming projects

## 0.3.8

### Patch Changes

- a0ab8e6: Remap XIcon to cross-medium and BoltIcon to lightning bolt (zap)

  - XIcon now renders a cross/close icon (medium size) instead of the Twitter/X brand logo
  - BoltIcon now renders a lightning bolt instead of the bolt.new brand logo
  - Add CrossMediumIcon and CrossMediumFilledIcon to complete the cross-small/medium/large family
  - Add BoltNewIcon and BoltNewFilledIcon to preserve the bolt.new brand icon
  - Add XTwitterIcon metadata (x-twitter.json)
  - The Twitter/X brand icon remains available as XTwitterIcon

## 0.3.7

### Patch Changes

- 70f467e: Add repo skills and fix README quick starts for blode-icons-react

## 0.3.6

### Patch Changes

- 9b9449e: Fix chevron-down, chevron-up, chevron-top, and chevron-bottom icons to use currentColor instead of hardcoded black stroke

## 0.3.5

### Patch Changes

- 3c14b36: Update chevron-top and chevron-bottom icons, remove filled variants

## 0.3.4

### Patch Changes

- Update chevron-top and chevron-bottom icons, remove filled variants

## 0.3.3

### Patch Changes

- 39cba44: Replace chevron-up and chevron-down SVG icons

## 0.3.2

### Patch Changes

- 18002d3: Add README to blode-icons-react package

## 0.3.1

### Patch Changes

- 0b4d3ea: fix
