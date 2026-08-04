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
  cacheComponents: true,
  // The sitemap stamps `lastModified`, and a prerender cannot read the clock.
  // next.config runs in Node at build time, outside any prerender.
  env: { BUILD_DATE: new Date().toISOString() },
  experimental: {
    // A bail-out from prerendering throws. Without this every cached GET logs a
    // stack trace during the build that means nothing.
    hideLogsAfterAbort: true,
    // Runs the React Compiler inside Turbopack rather than Babel.
    turbopackRustReactCompiler: true,
    // Hold a navigation pending through a connectivity drop and retry on
    // reconnect, instead of throwing.
    useOffline: true,
  },
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
  partialPrefetching: true,
  reactCompiler: true,
  async redirects() {
    return [
      {
        basePath: false,
        destination: `https://blode.co${basePath}`,
        has: [{ type: "host" as const, value: "icons.blode.co" }],
        source: "/",
        statusCode: 301,
      },
      {
        basePath: false,
        destination: `https://blode.co${basePath}/:path*`,
        has: [{ type: "host" as const, value: "icons.blode.co" }],
        source: "/:path*",
        statusCode: 301,
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
