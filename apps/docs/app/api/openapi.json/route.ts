import { siteConfig, siteUrl } from "@/lib/config";

export function GET() {
  const spec = {
    info: {
      description:
        "Read-only endpoints for searching and retrieving Blode Icons as SVG or React TSX. MIT licensed.",
      license: { name: "MIT" },
      title: "Blode Icons API",
      version: siteConfig.version,
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
      "/api/icons/search": {
        get: {
          operationId: "searchIcons",
          parameters: [
            {
              in: "query",
              name: "q",
              required: true,
              schema: { type: "string" },
            },
            {
              in: "query",
              name: "limit",
              required: false,
              schema: {
                default: 25,
                maximum: 100,
                minimum: 1,
                type: "integer",
              },
            },
            {
              in: "query",
              name: "style",
              required: false,
              schema: { enum: ["OUTLINE", "SOLID"], type: "string" },
            },
          ],
          responses: {
            "200": {
              content: { "application/json": { schema: { type: "object" } } },
              description: "Search results",
            },
          },
          summary: "Search icons by keyword, slug, tag, or Lucide alias",
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
