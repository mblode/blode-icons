const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://icons.blode.co";

export const dynamic = "force-static";

export function GET() {
  const spec = {
    openapi: "3.1.0",
    info: {
      title: "Blode Icons API",
      version: "1.0.0",
      description:
        "Read-only endpoints for retrieving Blode Icons source as SVG or React TSX.",
      license: { name: "MIT" },
    },
    servers: [{ url: SITE_URL }],
    paths: {
      "/api/icons/{icon}/svg": {
        get: {
          operationId: "getIconSvg",
          summary: "Get icon SVG source",
          parameters: [
            {
              name: "icon",
              in: "path",
              required: true,
              schema: { type: "string", pattern: "^[a-z0-9-]+$" },
            },
          ],
          responses: {
            "200": {
              description: "SVG source",
              content: { "image/svg+xml": { schema: { type: "string" } } },
            },
            "400": { description: "Invalid icon name" },
            "404": { description: "Icon not found" },
          },
        },
      },
      "/api/icons/{icon}/tsx": {
        get: {
          operationId: "getIconTsx",
          summary: "Get icon React component source",
          parameters: [
            {
              name: "icon",
              in: "path",
              required: true,
              schema: { type: "string", pattern: "^[a-z0-9-]+$" },
            },
          ],
          responses: {
            "200": {
              description: "TSX source",
              content: { "text/plain": { schema: { type: "string" } } },
            },
            "400": { description: "Invalid icon name" },
            "404": { description: "Icon not found" },
          },
        },
      },
      "/api/health": {
        get: {
          operationId: "getHealth",
          summary: "Service health check",
          responses: {
            "200": {
              description: "Service is healthy",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: { status: { type: "string" } },
                  },
                },
              },
            },
          },
        },
      },
    },
  };

  return new Response(JSON.stringify(spec, null, 2), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600",
    },
  });
}
