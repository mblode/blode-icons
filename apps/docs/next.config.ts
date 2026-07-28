import path from "node:path";

import type { NextConfig } from "next";

import { basePath } from "./lib/config";

const AGENT_LINK_HEADER = [
  `<${basePath}/.well-known/api-catalog>; rel="api-catalog"; type="application/linkset+json"`,
  `<${basePath}/api/openapi.json>; rel="service-desc"; type="application/json"`,
  `<${basePath}/installation>; rel="service-doc"; type="text/html"`,
  `<${basePath}/sitemap.xml>; rel="sitemap"; type="application/xml"`,
  `<${basePath}/.well-known/agent-skills/index.json>; rel="agent-skills"; type="application/json"`,
].join(", ");

const nextConfig: NextConfig = {
  assetPrefix: basePath,
  basePath,
  async headers() {
    return [
      {
        // The zone origin and the *.vercel.app aliases are non-canonical
        // hostnames inside the sc-domain:blode.co Search Console property, so
        // left open they are a crawlable duplicate of the whole site.
        //
        // Keyed off x-forwarded-host, NOT host: the multi-zone rewrite proxies
        // to the origin, so `host` is the origin for real blode.co traffic
        // too. Matching on `host` would noindex the live site.
        headers: [{ key: "X-Robots-Tag", value: "noindex" }],
        has: [
          {
            key: "x-forwarded-host",
            type: "header" as const,
            value: String.raw`.*\.zone\.blode\.co|.*\.vercel\.app`,
          },
        ],
        source: "/:path*",
      },
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
  async redirects() {
    return [
      {
        basePath: false,
        destination: `https://blode.co${basePath}`,
        has: [{ type: "host" as const, value: "icons.blode.co" }],
        permanent: true,
        source: "/",
      },
      {
        basePath: false,
        destination: `https://blode.co${basePath}/:path*`,
        has: [{ type: "host" as const, value: "icons.blode.co" }],
        permanent: true,
        source: "/:path*",
      },
    ];
  },
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
