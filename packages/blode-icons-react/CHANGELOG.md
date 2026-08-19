# blode-icons-react

## 1.0.0

### Major Changes

- 6c51820: Release 1.0.

  The package is a drop-in replacement for Lucide, so its public surface is Lucide's: the component names, the props, and the `DynamicIcon` lookup are all fixed by what they stand in for. There is no API design left to settle, and staying on 0.x communicated hesitancy rather than instability.

  This release carries the two corrections that make that surface honest, and both are breaking:

  - The 85 `-filled` exports that rendered outline art are gone, along with their entries in `DynamicIcon`'s name union.
  - `strokeWidth` reaches the artwork on the 1,788 outline icons that previously ignored it. 74 icons whose source art mixes stroke widths keep their authored values, because scaling them to a single width would flatten the drawing.

  Both belong in the release that fixes the API rather than in one that follows it.

### Minor Changes

- 0a108f2: Remove 85 `-filled` exports that rendered outline art.

  The build generated a `-filled` alias for every outline icon that had no filled SVG, re-exporting the outline component under the filled name. `AmazonFilledIcon`, `PaypalFilledIcon`, `KeyFilledIcon` and 82 others were in the public API and in `DynamicIcon`'s name union, and every one of them drew 2px strokes. Toggling an icon from outline to filled — the thing the pair exists for — changed nothing on screen and raised no error.

  **Breaking:** these 85 names no longer exist. Nothing renders differently, because the alias resolved to the outline component the whole time: replace `XFilledIcon` with `XIcon` and the pixels are identical. TypeScript flags the static imports at compile time; `DynamicIcon` logs and falls back for a name it cannot find. No Lucide-compatible alias referenced any of the 85, so that surface is unchanged.

  A `-filled` name is now exported only when a `-filled` SVG exists. Roughly half of the 85 are brand marks — payment cards, platform logos — where a filled counterpart is not a style the set should be expected to draw; the rest are gaps in the artwork, and the honest signal for a gap is a missing export rather than a name that quietly points somewhere else.

  Dropped: `amazon`, `apple-podcast`, `arrow-curve-down-left`, `arrow-curve-right`, `arrow-from-line-down`, `arrow-from-line-up`, `arrow-merge-left`, `arrow-merge-right`, `audible`, `audio-bars`, `beehiiv`, `branches`, `brand-amex`, `brand-jcb`, `brand-mastercard`, `brand-visa`, `brand-zoom`, `buymeacoffee`, `cable-knife`, `cashapp`, `chevron-down`, `chevron-up`, `circle-exclamation`, `circle-outline`, `cloud-dots`, `copy-simple`, `doordash`, `dot-grid-2x3-horizontal`, `dot-grid-2x3-vertical`, `dot-small`, `exposure`, `file-arrow-left`, `file-arrow-left-2`, `file-arrow-right`, `file-arrow-right-2`, `flick`, `four-k`, `frame-simple`, `git-commit-vertical`, `google-colored`, `google-play`, `info`, `kakaotalk`, `key`, `kick`, `knife-spoon`, `land-plot-simple`, `line-brand`, `login`, `macinthosh`, `magic`, `mailchimp`, `meandu`, `onlyfans`, `opentable`, `paypal`, `pencel-line`, `person-simple`, `pie-chart`, `quote`, `roundness`, `satellite`, `sevenrooms`, `shopify`, `sidebar-left-arrow-right`, `signal`, `slash-forward`, `soundcloud`, `square-arrow-down-2`, `square-arrow-left`, `square-arrow-right`, `square-arrow-up-2`, `tactics`, `three-d-sphere`, `trending-down-simple`, `uber`, `verified-check`, `video-play`, `vimeo`, `vk`, `voice`, `waves-simple`, `weibo`, `windows-colored`, `x-twitter` — each `-filled`.

- 5056dd6: Make `strokeWidth` actually change the stroke.

  The prop was accepted, documented, and inert: every generated component hardcoded `strokeWidth={2}` on its children, and a child presentation attribute beats the one inherited from the `<svg>` the prop lands on. The build now strips that attribute so the prop reaches the artwork — 1,788 outline icons that previously ignored it.

  This is a visual change for anyone already passing `strokeWidth` and getting nothing: those icons will now render at the width they asked for instead of at 2. Rendering at the default `strokeWidth={2}` is unchanged.

  The strip is per icon and all-or-nothing. 80 icons keep hardcoded widths because their strokes are optically tuned — an interior mark thinned to 1.8 so it does not clog beside a 2px container — and stripping some widths but not others would invert that adjustment at low stroke widths. `strokeWidth` also cannot reach any filled icon, whose art is outline-expanded into a `fill` with no stroke left to vary (lucide-react behaves the same way). See `DESIGN.md` for the full list and the reasoning.

### Patch Changes

- 0a108f2: Cover every icon with metadata, and give each concept one answer.

  96 outline SVGs shipped with no `icons-data` record, so they were absent from category listings and unreachable by keyword search; one record (`cloud-`, a typo of `cloud`) named an icon that does not exist. Both are now filled in and both directions are checked — `validate:icons-data` fails if metadata and outline art stop covering each other exactly.

  `_categories.json` carried `Vehicles` and `Vehicles & Aircrafts` as separate categories; they are merged into `Vehicles`.

  New: `icons-data/_concepts.json`, a table of 114 UI concepts each mapping to exactly one canonical slug — `delete → trash-can`, `search → magnifying-glass`, `settings → settings-gear-1`. It answers "what is the icon for X?" with one icon and keeps answering with one, so the set cannot quietly grow two icons for the same idea. Validation checks that every target resolves to a real icon and that no concept has been given a second answer.

## 0.5.0

### Minor Changes

- 568e7a4: Expand and verify Lucide compatibility. 579 Lucide names (canonical plus historical aliases) now import straight from the package, up from ~156.

  Every pair is verified by rendering both icons and comparing them, not by matching names. Name matching alone had proposed `Rat`, `Refrigerator` and `BusFront` as aliases of a reception bell icon and would have exported all three — imports that silently render the wrong icon. Lucide names without a genuine Blode counterpart are now left unexported, so a bad import fails at build time instead. The mapping records the score behind every pair.

  Also adds `absoluteStrokeWidth` prop parity with lucide-react, and richer search metadata for agent-facing discovery.

### Patch Changes

- e4b9003: Restore the 508 lucide-react aliases. The build parsed `lucide-mapping.ts` with a regex that required a fixed key order, so when the formatter alphabetised the object keys it matched nothing and emitted zero aliases while still exiting 0. The mapping is now imported as a module, and the build fails if it yields no usable entries.

## 0.4.1

### Patch Changes

- b6a5379: Point the package homepage at blode.co/icons

## 0.4.0

### Minor Changes

- 30d67fd: Add ~520 new icons (now ~2,000 base icons / ~4,000 components), each with category and keyword metadata. Backfill search keywords for ~1,290 previously-untagged icons so every icon is now searchable by synonyms and use-cases (e.g. "flight" finds airplane, "delete" finds trash). Adds `validate` and `validate:icons-data` gates that run before builds to catch malformed SVGs, component-name collisions, and bad metadata. Documents `optimizePackageImports` for faster Next.js builds.

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
