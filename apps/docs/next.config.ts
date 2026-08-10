import path from "node:path";

import type { NextConfig } from "next";

import { basePath } from "./lib/config";

const AGENT_LINK_HEADER = [
  `<${basePath}/llms.txt>; rel="llms-txt"; type="text/plain"`,
  `<${basePath}/llms-full.txt>; rel="llms-full-txt"; type="text/plain"`,
  `<${basePath}/.well-known/mcp.json>; rel="mcp"; type="application/json"`,
  `<${basePath}/.well-known/mcp/server-card.json>; rel="mcp-server-card"; type="application/json"`,
  `<${basePath}/.well-known/api-catalog>; rel="api-catalog"; type="application/linkset+json"`,
  `<${basePath}/api/openapi.json>; rel="service-desc"; type="application/json"`,
  `<${basePath}/installation>; rel="service-doc"; type="text/html"`,
  `<${basePath}/sitemap.xml>; rel="sitemap"; type="application/xml"`,
  `<${basePath}/.well-known/agent-skills/index.json>; rel="agent-skills"; type="application/json"`,
  `<${basePath}/r/registry.json>; rel="describedby"; type="application/json"`,
].join(", ");

const isDev = process.env.NODE_ENV === "development";

// The PostHog ingestion host, set per Vercel project to our reverse proxy
// (https://r.blode.co). posthog-js lazy-loads chunks from it, so it belongs in
// script-src as well as connect-src.
const posthogOrigin = process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "";

// Shiki highlights on the server behind `use cache`, so no grammar wasm is
// evaluated in the browser and script-src needs no 'wasm-unsafe-eval'.
const contentSecurityPolicy = [
  "default-src 'self'",
  // 'unsafe-inline' covers Next's bootstrap and the JSON-LD block. Dev also
  // needs 'unsafe-eval' for React Refresh; production must not have it.
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""} ${posthogOrigin}`,
  `connect-src 'self' ${posthogOrigin}`,
  "img-src 'self' data:",
  "style-src 'self' 'unsafe-inline'",
  "font-src 'self'",
  "worker-src 'self' blob:",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=()",
  },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  { key: "Cross-Origin-Resource-Policy", value: "same-origin" },
];

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
    // Every matching rule applies in array order and a later value wins per
    // header key, so the catch-all comes first and per-route rules after it.
    //
    // `/:path*`, not `/(.*)`. Next prefixes basePath onto the source, and
    // `/icons/(.*)` needs the separator, so it misses the zone root: the one
    // URL blode.co actually links to. `/:path*` matches `/icons` as well.
    return [
      {
        headers: securityHeaders,
        source: "/:path*",
      },
      // The share cards are fetched by other origins, so they opt out of the
      // same-origin CORP the catch-all sets. These are generated routes, so
      // they serve without a file extension.
      ...["/opengraph-image"].map((source) => ({
        headers: [
          { key: "Cross-Origin-Resource-Policy", value: "cross-origin" },
        ],
        source,
      })),
      // Same pages `proxy.ts` serves markdown for.
      ...["/", "/installation"].map((source) => ({
        headers: [{ key: "Link", value: AGENT_LINK_HEADER }],
        source,
      })),
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
};

export default nextConfig;
