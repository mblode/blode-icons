import { siteUrl } from "@/lib/config";

export function GET() {
  const spec = {
    info: {
      description:
        "Read-only endpoints for retrieving Blode Icons source as SVG or React TSX.",
      license: { name: "MIT" },
      title: "Blode Icons API",
      version: "1.0.0",
    },
    openapi: "3.1.0",
    paths: {
      "/api/health": {
        get: {
          operationId: "getHealth",
          responses: {
            "200": {
              content: {
                "application/json": {
                  schema: {
                    properties: { status: { type: "string" } },
                    type: "object",
                  },
                },
              },
              description: "Service is healthy",
            },
          },
          summary: "Service health check",
        },
      },
      "/api/icons/{icon}/svg": {
        get: {
          operationId: "getIconSvg",
          parameters: [
            {
              in: "path",
              name: "icon",
              required: true,
              schema: { pattern: "^[a-z0-9-]+$", type: "string" },
            },
          ],
          responses: {
            "200": {
              content: { "image/svg+xml": { schema: { type: "string" } } },
              description: "SVG source",
            },
            "400": { description: "Invalid icon name" },
            "404": { description: "Icon not found" },
          },
          summary: "Get icon SVG source",
        },
      },
      "/api/icons/{icon}/tsx": {
        get: {
          operationId: "getIconTsx",
          parameters: [
            {
              in: "path",
              name: "icon",
              required: true,
              schema: { pattern: "^[a-z0-9-]+$", type: "string" },
            },
          ],
          responses: {
            "200": {
              content: { "text/plain": { schema: { type: "string" } } },
              description: "TSX source",
            },
            "400": { description: "Invalid icon name" },
            "404": { description: "Icon not found" },
          },
          summary: "Get icon React component source",
        },
      },
    },
    servers: [{ url: siteUrl }],
  };

  return new Response(JSON.stringify(spec, null, 2), {
    headers: {
      "Cache-Control": "public, max-age=0, s-maxage=3600",
      "Content-Type": "application/json; charset=utf-8",
    },
  });
}
