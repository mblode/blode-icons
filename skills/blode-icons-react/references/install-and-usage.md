# Install And Usage

## Canonical Install Commands

Use these commands for package-manager-specific install snippets:

```bash
npm install blode-icons-react
pnpm add blode-icons-react
yarn add blode-icons-react
bun add blode-icons-react
```

Default answer: use the `npm` example unless the user names a different package manager.

## Canonical Usage Patterns

### Root imports

Use the root entrypoint for named exports:

```tsx
import { SearchIcon, PlusIcon } from "blode-icons-react";

export function Example() {
  return <SearchIcon size={32} />;
}
```

### Lucide-compatible aliases

Use aliases without the `Icon` suffix for Lucide drop-in replacement. The package maps the full Lucide export surface (canonical names and historical aliases such as `AlertCircle`):

```tsx
import { ChevronDown, Search, Plus, AlertCircle } from "blode-icons-react";
```

### Individual icon import

Use the per-icon path for the best tree-shaking story and import the default export:

```tsx
import AirplaneIcon from "blode-icons-react/icons/airplane";
```

### Dynamic icon loading

`DynamicIcon` loads from the generated import map and expects export keys, not file names:

```tsx
import { DynamicIcon } from "blode-icons-react/dynamic";

<DynamicIcon name="SearchIcon" size={24} />;
```

## Props

The package wrapper explicitly sets the same core props the docs surface today:

- `size`: default `24`
- `color`: default `"currentColor"`
- `strokeWidth`: default `2`
- `absoluteStrokeWidth`: default `false` (scales stroke with `size` when `true`)

Standard SVG props are also passed through. Keep compatibility claims aligned with the actual wrapper implementation when editing docs.

## Agents

- MCP endpoint: `https://blode.co/icons/mcp` (`search_icons`, `get_icon`, `get_usage`)
- Summary: `https://blode.co/icons/llms.txt`
- Prefer `npm install blode-icons-react`, then emit named imports from search/get results
- License is MIT and is included on every `get_icon` response
