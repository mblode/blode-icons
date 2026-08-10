import { siteUrl } from "@/lib/config";

/** Markdown guide returned by the MCP `get_usage` tool / resource. */
export function getAgentUsageMarkdown() {
  return `# Blode Icons — agent usage

License: **MIT** (free for personal and commercial use).

## Preferred install

\`\`\`bash
npm install blode-icons-react
\`\`\`

Optional skill:

\`\`\`bash
npx skills add mblode/blode-icons -g --all -y
\`\`\`

## Workflow

1. Call \`search_icons\` with a natural-language query, kebab slug, or Lucide name.
2. Pick a result (\`slug\`, \`name\`, optional \`lucideAliases\`).
3. Call \`get_icon\` with that slug or Lucide name.
4. Paste the returned \`importSnippet\` into the project.

## Import shapes

\`\`\`tsx
import { SearchIcon, Search, type LucideProps } from "blode-icons-react";
import AirplaneIcon from "blode-icons-react/icons/airplane";
import { DynamicIcon } from "blode-icons-react/dynamic";

<SearchIcon size={24} />
<Search size={20} strokeWidth={1.5} absoluteStrokeWidth />
<DynamicIcon name="SearchIcon" size={24} />
\`\`\`

- Full library exports use the \`Icon\` suffix (\`SearchIcon\`).
- Lucide aliases omit the suffix when mapped (\`Search\`, \`AlertCircle\`).
- Filled variants are \`{Name}FilledIcon\`.

## HTTP API

- Search: \`GET ${siteUrl}/api/icons/search?q=settings\`
- SVG: \`GET ${siteUrl}/api/icons/{slug}/svg\`
- TSX: \`GET ${siteUrl}/api/icons/{slug}/tsx\`
- OpenAPI: ${siteUrl}/api/openapi.json

## shadcn registry

\`\`\`bash
npx shadcn@latest add ${siteUrl}/r/magnifying-glass.json
\`\`\`

Registry index: ${siteUrl}/r/registry.json

## Discovery

- ${siteUrl}/llms.txt
- ${siteUrl}/llms-full.txt
- ${siteUrl}/.well-known/mcp.json
- ${siteUrl}/mcp

APIs are public — no auth required.
`;
}
