import { type NextRequest, NextResponse } from "next/server";

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

- Site: https://icons.blode.co
- Source: https://github.com/mblode/blode-icons
- Package: \`blode-icons-react\` on npm

## Installation

\`\`\`bash
npm install blode-icons-react
\`\`\`

See [/installation](https://icons.blode.co/installation) for full setup.

## Usage

\`\`\`tsx
import { CheckIcon } from "blode-icons-react";

export function Example() {
  return <CheckIcon />;
}
\`\`\`

## API

Each icon is retrievable directly as SVG or TSX:

- \`GET /api/icons/{name}/svg\` — SVG source
- \`GET /api/icons/{name}/tsx\` — React component source
- OpenAPI spec: \`/api/openapi.json\`
- API catalog: \`/.well-known/api-catalog\`

## Agent discovery

- \`/robots.txt\` — crawl policy + Content-Signal directives
- \`/sitemap.xml\` — canonical URL list
- \`/.well-known/agent-skills/index.json\` — agent skills index
`,
  "/installation": `# Installation

Install the \`blode-icons-react\` package from npm:

\`\`\`bash
npm install blode-icons-react
\`\`\`

\`\`\`bash
pnpm add blode-icons-react
\`\`\`

\`\`\`bash
yarn add blode-icons-react
\`\`\`

## Usage

Import any icon by name. All icons are React components.

\`\`\`tsx
import { CheckIcon, ArrowRightIcon } from "blode-icons-react";

export function Example() {
  return (
    <div>
      <CheckIcon size={16} />
      <ArrowRightIcon size={16} />
    </div>
  );
}
\`\`\`

## Variants

Outline is the default. Filled variants are exported as \`{Name}FilledIcon\`.

\`\`\`tsx
import { HeartIcon, HeartFilledIcon } from "blode-icons-react";
\`\`\`

## Raw sources

Fetch an icon's source directly:

- \`https://icons.blode.co/api/icons/{name}/svg\`
- \`https://icons.blode.co/api/icons/{name}/tsx\`
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
    return { type: type.trim().toLowerCase(), q: Number.isNaN(q) ? 0 : q };
  });

  const best = entries.reduce((acc, e) => (e.q > acc.q ? e : acc), {
    type: "",
    q: 0,
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
    "Content-Type": "text/markdown; charset=utf-8",
    Vary: "Accept",
    "Cache-Control": "public, max-age=0, s-maxage=3600",
    "x-markdown-tokens": String(Math.ceil(body.length / 4)),
  });

  return new NextResponse(body, { status: 200, headers });
}
