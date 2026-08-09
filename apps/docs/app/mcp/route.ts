import { createMcpHandler } from "mcp-handler";
import { z } from "zod";

import { recordAgentEvent } from "@/lib/agent-stats";
import { siteConfig } from "@/lib/config";
import { buildIconPayload, searchIconDocs } from "@/lib/icon-resolve";

const handler = createMcpHandler(
  (server) => {
    server.registerTool(
      "search_icons",
      {
        description:
          "Search Blode Icons by keyword, kebab slug, tag, category, or Lucide alias. Returns MIT-licensed icon metadata.",
        inputSchema: z.object({
          limit: z.number().int().min(1).max(100).optional(),
          query: z.string().min(1),
          style: z.enum(["OUTLINE", "SOLID"]).optional(),
        }),
        title: "Search Icons",
      },
      async ({ limit, query, style }) => {
        const results = searchIconDocs({ limit, query, style });
        recordAgentEvent({
          client: "mcp",
          query,
          source: "mcp",
          type: "search",
        });

        return {
          content: [
            {
              text: JSON.stringify(
                {
                  count: results.length,
                  license: "MIT",
                  query,
                  results: results.map((icon) => ({
                    category: icon.category,
                    hasFilled: icon.hasFilled,
                    lucideAliases: icon.lucideAliases,
                    name: icon.name,
                    slug: icon.slug,
                    tags: icon.tags,
                    title: icon.title,
                  })),
                },
                null,
                2
              ),
              type: "text",
            },
          ],
        };
      }
    );

    server.registerTool(
      "get_icon",
      {
        description:
          "Fetch a Blode icon by kebab slug or Lucide name. Returns MIT license, import snippet, and SVG/TSX source.",
        inputSchema: z.object({
          format: z.enum(["svg", "tsx", "both"]).optional(),
          name: z.string().min(1),
        }),
        title: "Get Icon",
      },
      async ({ format = "both", name }) => {
        const payload = await buildIconPayload(name, format);
        if (!payload) {
          return {
            content: [
              {
                text: JSON.stringify({
                  error: `Icon "${name}" not found`,
                  hint: "Use search_icons to find a slug or Lucide alias.",
                }),
                type: "text",
              },
            ],
            isError: true,
          };
        }

        recordAgentEvent({
          format,
          lucideAlias: payload.lucideAliases[0],
          slug: payload.slug,
          source: "mcp",
          type: "get",
        });

        return {
          content: [
            {
              text: JSON.stringify(payload, null, 2),
              type: "text",
            },
          ],
        };
      }
    );
  },
  {
    serverInfo: {
      name: "blode-icons",
      version: siteConfig.version,
    },
  }
);

export { handler as DELETE, handler as GET, handler as POST };
