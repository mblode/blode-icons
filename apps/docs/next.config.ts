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
  reactCompiler: true,
  turbopack: {
    root: path.join(import.meta.dirname, "../.."),
  },
  async headers() {
    return [
      {
        source: "/",
        headers: [{ key: "Link", value: AGENT_LINK_HEADER }],
      },
      {
        source: "/installation",
        headers: [{ key: "Link", value: AGENT_LINK_HEADER }],
      },
    ];
  },
};

export default nextConfig;
