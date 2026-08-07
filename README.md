<div align="center">

# [Blode Icons](https://blode.co/icons)

**4,193 icons for React in matched outline and filled pairs, with [Lucide](https://lucide.dev)-compatible props**

Import one icon by name, or load any of them on demand at runtime.

<p align="center">
  <a href="https://www.npmjs.com/package/blode-icons-react">
    <img src="https://img.shields.io/npm/v/blode-icons-react?style=flat&colorA=000000&colorB=000000" />
  </a>
  <a href="https://github.com/mblode/blode-icons/blob/main/LICENSE.md">
    <img src="https://img.shields.io/github/license/mblode/blode-icons?style=flat&colorA=000000&colorB=000000" />
  </a>
</p>

</div>

<p align="center">
  <img alt="A grid of outline icons with their names underneath" src=".github/assets/screenshot.jpg" width="800" />
</p>

## Demo

Search every icon by name or category and copy the import.

<p>
<a href="https://blode.co/icons">
<img alt="View demo" src=".github/assets/demo.svg" width="200" />
</a>
</p>

## Install

```bash
npm install blode-icons-react
```

## Quickstart

```tsx
import { ChevronDownIcon } from "blode-icons-react";

export function Disclosure() {
  return <ChevronDownIcon size={20} strokeWidth={1.5} />;
}
```

## Import paths

```tsx
// The whole library, every name carrying an Icon suffix
import { ChevronDownIcon, SparkleIcon } from "blode-icons-react";

// A single icon, for the tightest bundle
import ChevronDownIcon from "blode-icons-react/icons/chevron-down";

// Any icon by name, code-split and loaded on demand
import { DynamicIcon } from "blode-icons-react/dynamic";

<DynamicIcon name="SearchIcon" size={24} />;
```

## Props

Every icon forwards its ref and accepts any SVG attribute, plus these three.

| Prop | Default | Description |
|------|---------|-------------|
| `size` | `24` | Sets both width and height |
| `color` | `currentColor` | Passed to the SVG `color` attribute |
| `strokeWidth` | `2` | Outline thickness |

## Notes

- Common icons are also exported under their `lucide-react` names, so `ChevronDown` and `Search` resolve without the suffix.
- `LucideProps` and `LucideIcon` are exported, and match the `lucide-react` types of the same name.
- Every icon is generated from SVGO-optimised source, so nothing arrives with editor cruft in it.
- Part of [Blode](https://blode.co).

## License

MIT

---

Crafted by [<img src="https://blode.co/avatar-circle.png" width="20" align="top" />](https://blode.co) [Matthew Blode](https://blode.co)
