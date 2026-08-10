// RFC 9727 — api-catalog well-known URI
// RFC 9264 — linkset+json media type

import { siteUrl } from "@/lib/config";

export function GET() {
  const linkset = {
    linkset: [
      {
        anchor: `${siteUrl}/api/icons`,
        "service-desc": [
          {
            href: `${siteUrl}/api/openapi.json`,
            type: "application/json",
          },
        ],
        "service-doc": [
          {
            href: `${siteUrl}/installation`,
            type: "text/html",
          },
          {
            href: `${siteUrl}/llms.txt`,
            type: "text/plain",
          },
        ],
        status: [
          {
            href: `${siteUrl}/api/health`,
            type: "application/json",
          },
        ],
      },
      {
        anchor: `${siteUrl}/mcp`,
        "service-desc": [
          {
            href: `${siteUrl}/.well-known/mcp.json`,
            type: "application/json",
          },
        ],
      },
    ],
  };

  return new Response(JSON.stringify(linkset, null, 2), {
    headers: {
      "Cache-Control": "public, max-age=0, s-maxage=3600",
      "Content-Type": "application/linkset+json",
    },
  });
}
