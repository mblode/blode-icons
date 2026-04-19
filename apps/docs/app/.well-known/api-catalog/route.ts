// RFC 9727 — api-catalog well-known URI
// RFC 9264 — linkset+json media type

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://icons.blode.co";

export const dynamic = "force-static";

export function GET() {
  const linkset = {
    linkset: [
      {
        anchor: `${SITE_URL}/api/icons`,
        "service-desc": [
          {
            href: `${SITE_URL}/api/openapi.json`,
            type: "application/json",
          },
        ],
        "service-doc": [
          {
            href: `${SITE_URL}/installation`,
            type: "text/html",
          },
        ],
        status: [
          {
            href: `${SITE_URL}/api/health`,
            type: "application/json",
          },
        ],
      },
    ],
  };

  return new Response(JSON.stringify(linkset, null, 2), {
    headers: {
      "Content-Type": "application/linkset+json",
      "Cache-Control": "public, max-age=0, s-maxage=3600",
    },
  });
}
