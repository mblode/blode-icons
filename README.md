<h3 align="center">Blode Icons</h3>
<p align="center">3,000+ open-source icons for React — drop-in lucide-react replacement.</p>

<p align="center">
  <a href="https://www.npmjs.com/package/blode-icons-react"><img alt="npm version" src="https://img.shields.io/npm/v/blode-icons-react"></a>
  <a href="https://github.com/mblode/blode-icons/blob/main/LICENSE.md"><img alt="License" src="https://img.shields.io/badge/License-MIT-yellow.svg"></a>
</p>

## Highlights

- 3,000+ SVG icons (1,500+ outline/filled pairs), optimized with SVGO
- Drop-in lucide-react replacement — same props, same API
- Tree-shakeable with individual icon imports
- Dynamic icon loading with `DynamicIcon` and lazy imports
- Searchable docs site with copy-to-clipboard

## Documentation

Browse icons, search by name or category, and copy code at:

- https://icons.blode.co

## Quick Start

```bash
npm install blode-icons-react
```

```tsx
import { ChevronDown, Search, Plus } from "blode-icons-react"

export default function App() {
  return <ChevronDown size={20} />
}
```

## Usage

```tsx
// Lucide-compatible icons (same names as lucide-react)
import { ChevronDown, Search, Plus } from "blode-icons-react"

// Full icon library (with Icon suffix)
import { ChevronDownIcon, SparkleIcon } from "blode-icons-react"

// Individual icon import (best for tree-shaking)
import { ChevronDownIcon } from "blode-icons-react/icons/chevron-down"

// Dynamic icon loading
import { DynamicIcon } from "blode-icons-react/dynamic"

// Types
import type { LucideProps, LucideIcon } from "blode-icons-react"
```

All icons accept the same props as `lucide-react`:

- `size` — Width and height (default: `24`)
- `color` — Icon color (default: `'currentColor'`)
- `strokeWidth` — Stroke width (default: `2`)
- `absoluteStrokeWidth` — Constant stroke width regardless of size

## License

[MIT](https://github.com/mblode/blode-icons/blob/main/LICENSE.md)
