<h3 align="center">blode-icons-react</h3>
<p align="center">2,000+ icons for React, with Lucide-compatible names and props.</p>

<p align="center">
  <a href="https://www.npmjs.com/package/blode-icons-react"><img alt="npm version" src="https://img.shields.io/npm/v/blode-icons-react"></a>
  <a href="https://github.com/mblode/blode-icons/blob/main/LICENSE"><img alt="License" src="https://img.shields.io/badge/License-MIT-yellow.svg"></a>
</p>

## Highlights

- **Lucide-style aliases:** 579 Lucide names (canonical + historical aliases) import straight from this package
- **Verified, not guessed:** every alias is checked by rendering both icons and comparing them, so a Lucide name never resolves to an unrelated drawing
- **Tree-shakeable:** only ship the icons you use
- **Dynamic imports:** load icons by name at runtime
- **Lucide-compatible props:** `size`, `color`, `strokeWidth`, and `absoluteStrokeWidth`

Blode is its own icon set rather than a Lucide clone, so it is not a full drop-in replacement: Lucide names without a genuine Blode counterpart are deliberately not exported, and fail at build time instead of silently rendering the wrong icon. Run `npm run verify:lucide-mapping` to see the score behind any pair.

## Install

```bash
npx skills add mblode/blode-icons -g --all -y
```

```bash
npm install blode-icons-react
```

## Quick Start

```tsx
import { AirplaneIcon } from "blode-icons-react";

export default function App() {
  return <AirplaneIcon size={32} color="#0066ff" />;
}
```

### Tree-shaking import

```tsx
import AirplaneIcon from "blode-icons-react/icons/airplane";
```

### Faster builds in Next.js

Add the package to `optimizePackageImports` so barrel imports are rewritten to per-icon deep imports automatically — no need to change your import style:

```ts
// next.config.ts
export default {
  experimental: { optimizePackageImports: ["blode-icons-react"] },
};
```

### Dynamic icon

```tsx
import { DynamicIcon } from "blode-icons-react/dynamic";

<DynamicIcon name="AirplaneIcon" size={24} />;
```

## Props

All icons accept standard SVG attributes plus:

- `size` — width and height in pixels (default: `24`)
- `color` — stroke/fill color (default: `"currentColor"`)
- `strokeWidth` — stroke width (default: `2`)
- `absoluteStrokeWidth` — scale stroke with size like lucide-react (default: `false`)

## Agents

- Site: https://blode.co/icons
- MCP: https://blode.co/icons/mcp (`search_icons`, `get_icon`)
- `llms.txt`: https://blode.co/icons/llms.txt
- shadcn registry: `npx shadcn@latest add https://blode.co/icons/r/<slug>.json`

## License

[MIT](https://github.com/mblode/blode-icons/blob/main/LICENSE)
