"use client";

import { useEffect } from "react";

import { asset } from "@/lib/config";

// WebMCP — exposes site tools to AI agents via navigator.modelContext.
// Spec: https://webmachinelearning.github.io/webmcp/

interface McpToolResult {
  content: { type: "text"; text: string }[];
}

interface McpTool {
  description: string;
  execute: (args: Record<string, unknown>) => Promise<McpToolResult>;
  inputSchema: Record<string, unknown>;
  name: string;
}

interface ModelContext {
  provideContext: (context: { tools: McpTool[] }) => void | Promise<void>;
}

declare global {
  interface Navigator {
    modelContext?: ModelContext;
  }
}

async function fetchIconSource(
  name: string,
  format: "svg" | "tsx"
): Promise<string> {
  const response = await fetch(asset(`/api/icons/${name}/${format}`));
  if (!response.ok) {
    throw new Error(`Icon "${name}" not found (${response.status})`);
  }
  return response.text();
}

async function searchIcons(query: string, limit = 25): Promise<unknown> {
  const params = new URLSearchParams({
    limit: String(limit),
    q: query,
  });
  const response = await fetch(asset(`/api/icons/search?${params}`));
  if (!response.ok) {
    throw new Error(`Search failed (${response.status})`);
  }
  return response.json();
}

const tools: McpTool[] = [
  {
    description:
      "Search Blode Icons by keyword, kebab slug, tag, category, or Lucide alias.",
    async execute(args) {
      const query = String(args.query ?? "");
      const limit = Number(args.limit ?? 25);
      const result = await searchIcons(query, limit);
      return {
        content: [{ text: JSON.stringify(result, null, 2), type: "text" }],
      };
    },
    inputSchema: {
      properties: {
        limit: {
          description: "Max results (1-100).",
          maximum: 100,
          minimum: 1,
          type: "number",
        },
        query: {
          description: "Search query, e.g. 'settings' or 'HelpCircle'.",
          type: "string",
        },
      },
      required: ["query"],
      type: "object",
    },
    name: "search_icons",
  },
  {
    description:
      "Fetch the raw SVG source for a Blode icon by its kebab-case slug (e.g. 'check', 'arrow-right').",
    async execute(args) {
      const name = String(args.name ?? "");
      const svg = await fetchIconSource(name, "svg");
      return { content: [{ text: svg, type: "text" }] };
    },
    inputSchema: {
      properties: {
        name: {
          description: "Kebab-case icon slug, e.g. 'check' or 'arrow-right'.",
          pattern: "^[a-z0-9-]+$",
          type: "string",
        },
      },
      required: ["name"],
      type: "object",
    },
    name: "get_icon_svg",
  },
  {
    description:
      "Fetch the React (TSX) component source for a Blode icon by its kebab-case slug.",
    async execute(args) {
      const name = String(args.name ?? "");
      const tsx = await fetchIconSource(name, "tsx");
      return { content: [{ text: tsx, type: "text" }] };
    },
    inputSchema: {
      properties: {
        name: {
          description: "Kebab-case icon slug, e.g. 'check' or 'arrow-right'.",
          pattern: "^[a-z0-9-]+$",
          type: "string",
        },
      },
      required: ["name"],
      type: "object",
    },
    name: "get_icon_tsx",
  },
];

export function WebMcpProvider() {
  useEffect(() => {
    const { modelContext } = navigator;
    if (!modelContext?.provideContext) {
      return;
    }
    Promise.resolve(modelContext.provideContext({ tools })).catch(() => {
      // ignored — agents are optional
    });
  }, []);

  return null;
}
