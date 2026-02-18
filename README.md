# blode-icons

Turborepo monorepo containing the Blode icon library and documentation site.

## Structure

```
apps/
  docs/           → Next.js documentation site
packages/
  blode-icons-react/ → React icon library (published to npm)
```

## Install

```bash
npm install blode-icons-react
```

## Usage

```ts
// Lucide-compatible icons (same names as lucide-react)
import { ChevronDown, Search, Plus } from "blode-icons-react"

// Full icon library (with Icon suffix)
import { ChevronDownIcon, SparkleIcon } from "blode-icons-react"

// Types
import type { LucideProps, LucideIcon } from "blode-icons-react"
```

## Lucide props

All lucide-compatible icons accept the same props as `lucide-react`:

- `size` — Sets width and height (default: `24`)
- `color` — Icon color (default: `'currentColor'`)
- `strokeWidth` — Stroke width (default: `2`)
- `absoluteStrokeWidth` — When `true`, stroke width stays constant regardless of size

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy (Vercel CLI)

The docs site (`apps/docs`) is deployed to Vercel. Install the Vercel CLI globally if you haven't:

```bash
npm i -g vercel
```

### Preview deployment

```bash
vercel
```

### Production deployment

```bash
vercel --prod
```

Vercel is configured with `apps/docs` as the root directory. Turbo handles the build pipeline — the `docs#build` task depends on `copy-icons`, which depends on `blode-icons-react#build`, so all packages are built in the correct order.

## Release

```bash
npx changeset
npx changeset version
npm run release
```
