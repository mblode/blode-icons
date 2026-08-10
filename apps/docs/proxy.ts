import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { basePath, siteUrl } from "@/lib/config";

export const config = {
  matcher: ["/", "/installation"],
};

const MARKDOWN_PAGES: Record<string, string> = {
  "/": `# Blode Icons

A beautifully crafted icon library. Open source.

## Overview

Blode Icons is a collection of SVG icons distributed as a React component
library. Every icon ships as a tree-shakeable React component with both
outline and filled variants.

- Site: ${siteUrl}
- Source: https://github.com/mblode/blode-icons
- Package: \`blode-icons-react\` on npm

## Installation

\`\`\`bash
npm install blode-icons-react
\`\`\`

See [${basePath}/installation](${siteUrl}/installation) for full setup.

## Usage

\`\`\`tsx
import { CheckIcon } from "blode-icons-react";

export function Example() {
  return <CheckIcon />;
}
\`\`\`

## API

Each icon is retrievable directly as SVG or TSX:

- \`GET ${basePath}/api/icons/{name}/svg\` — SVG source
- \`GET ${basePath}/api/icons/{name}/tsx\` — React component source
- OpenAPI spec: \`${basePath}/api/openapi.json\`
- API catalog: \`${basePath}/.well-known/api-catalog\`

## Agents

- \`${basePath}/llms.txt\` — agent summary
- \`${basePath}/mcp\` — MCP (\`search_icons\`, \`get_icon\`, \`get_usage\`)
- \`${basePath}/.well-known/mcp.json\` — MCP discovery
- APIs are public — no auth required
`,
  "/installation": `# Install

\`\`\`bash
npm install blode-icons-react
\`\`\`

## Usage

\`\`\`tsx
import { SearchIcon, Search } from "blode-icons-react";

<SearchIcon size={24} />
<Search size={20} strokeWidth={1.5} />
\`\`\`

Props match lucide-react: \`size\`, \`color\`, \`strokeWidth\`, \`absoluteStrokeWidth\`.

## Agents

MCP: ${siteUrl}/mcp — \`search_icons\` → \`get_icon\`

\`\`\`bash
npx skills add mblode/blode-icons -g --all -y
\`\`\`

- ${siteUrl}/llms.txt
- ${siteUrl}/.well-known/mcp.json
`,
};

function prefersMarkdown(accept: string | null): boolean {
  if (!accept) {
    return false;
  }
  const entries = accept.split(",").map((part) => {
    const [type, ...params] = part.trim().split(";");
    const qParam = params.find((p) => p.trim().startsWith("q="));
    const q = qParam ? Number.parseFloat(qParam.trim().slice(2)) : 1;
    return { q: Number.isNaN(q) ? 0 : q, type: type.trim().toLowerCase() };
  });

  const best = entries.reduce((acc, e) => (e.q > acc.q ? e : acc), {
    q: 0,
    type: "",
  });

  return best.type === "text/markdown";
}

export function proxy(request: NextRequest) {
  const accept = request.headers.get("accept");

  if (!prefersMarkdown(accept)) {
    return NextResponse.next();
  }

  const body = MARKDOWN_PAGES[request.nextUrl.pathname];
  if (!body) {
    return NextResponse.next();
  }

  const headers = new Headers({
    "Cache-Control": "public, max-age=0, s-maxage=3600",
    "Content-Type": "text/markdown; charset=utf-8",
    Vary: "Accept",
    "x-markdown-tokens": String(Math.ceil(body.length / 4)),
  });

  return new NextResponse(body, { headers, status: 200 });
}
