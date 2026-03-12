<h3 align="center">blode-icons-react</h3>
<p align="center">3,000+ icons for React — drop-in lucide-react replacement.</p>

<p align="center">
  <a href="https://www.npmjs.com/package/blode-icons-react"><img alt="npm version" src="https://img.shields.io/npm/v/blode-icons-react"></a>
  <a href="https://github.com/mblode/blode-icons/blob/main/LICENSE"><img alt="License" src="https://img.shields.io/badge/License-MIT-yellow.svg"></a>
</p>

## Highlights

- **Lucide-style aliases:** mapped icons can replace `lucide-react` imports with minimal code changes
- **Tree-shakeable:** only ship the icons you use
- **Dynamic imports:** load icons by name at runtime
- **Lucide-compatible props:** `size`, `color`, and `strokeWidth` work out of the box

## Install

```bash
npx skills add mblode/blode-icons -g --all -y
```

```bash
npm install blode-icons-react
```

## Quick Start

```tsx
import { AirplaneIcon } from "blode-icons-react"

export default function App() {
  return <AirplaneIcon size={32} color="#0066ff" />
}
```

### Tree-shaking import

```tsx
import AirplaneIcon from "blode-icons-react/icons/airplane"
```

### Dynamic icon

```tsx
import { DynamicIcon } from "blode-icons-react/dynamic"

<DynamicIcon name="AirplaneIcon" size={24} />
```

## Props

All icons accept standard SVG attributes plus:

- `size` — width and height in pixels (default: `24`)
- `color` — stroke/fill color (default: `"currentColor"`)
- `strokeWidth` — stroke width (default: `2`)

## License

[MIT](https://github.com/mblode/blode-icons/blob/main/LICENSE)
