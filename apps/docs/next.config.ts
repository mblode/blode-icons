import path from "node:path";

import type { NextConfig } from "next";

const AGENT_LINK_HEADER = [
  '</.well-known/api-catalog>; rel="api-catalog"; type="application/linkset+json"',
  '</api/openapi.json>; rel="service-desc"; type="application/json"',
  '</installation>; rel="service-doc"; type="text/html"',
  '</sitemap.xml>; rel="sitemap"; type="application/xml"',
  '</.well-known/agent-skills/index.json>; rel="agent-skills"; type="application/json"',
].join(", ");

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        headers: [{ key: "Link", value: AGENT_LINK_HEADER }],
        source: "/",
      },
      {
        headers: [{ key: "Link", value: AGENT_LINK_HEADER }],
        source: "/installation",
      },
    ];
  },
  reactCompiler: true,
  turbopack: {
    root: path.join(import.meta.dirname, "../.."),
  },
  typescript: {
    // TypeScript 7's native compiler doesn't expose the legacy programmatic
    // API that Next's built-in build-time type check relies on. Types are
    // still enforced separately via `npm run check:types` (tsc --noEmit).
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
