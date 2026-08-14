# Blode Icons docs

Icon browser and MCP surface for [blode-icons-react](https://www.npmjs.com/package/blode-icons-react). Served at [blode.co/icons](https://blode.co/icons).

## Develop

Run from the monorepo root:

```bash
npm install
npm run dev
```

`npm run dev` in this app is `portless blode-icons next dev` (not localhost:3000). The site reads generated icon data from `packages/blode-icons-react`.

```bash
npm run check:types
npm run lint
npm run build
```

## Surfaces

- Icon search UI
- MCP at `/mcp` (`search_icons`, `get_icon`, `get_usage`)
- shadcn registry under `/r/`
