"use client";

import { useEffect } from "react";

// WebMCP — exposes site tools to AI agents via navigator.modelContext.
// Spec: https://webmachinelearning.github.io/webmcp/

interface McpToolResult {
  content: Array<{ type: "text"; text: string }>;
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

const ORIGIN =
  typeof window === "undefined"
    ? "https://icons.blode.co"
    : window.location.origin;

async function fetchIconSource(
  name: string,
  format: "svg" | "tsx"
): Promise<string> {
  const response = await fetch(`${ORIGIN}/api/icons/${name}/${format}`);
  if (!response.ok) {
    throw new Error(`Icon "${name}" not found (${response.status})`);
  }
  return response.text();
}

const tools: McpTool[] = [
  {
    name: "get_icon_svg",
    description:
      "Fetch the raw SVG source for a Blode icon by its kebab-case slug (e.g. 'check', 'arrow-right').",
    inputSchema: {
      type: "object",
      properties: {
        name: {
          type: "string",
          description: "Kebab-case icon slug, e.g. 'check' or 'arrow-right'.",
          pattern: "^[a-z0-9-]+$",
        },
      },
      required: ["name"],
    },
    async execute(args) {
      const name = String(args.name ?? "");
      const svg = await fetchIconSource(name, "svg");
      return { content: [{ type: "text", text: svg }] };
    },
  },
  {
    name: "get_icon_tsx",
    description:
      "Fetch the React (TSX) component source for a Blode icon by its kebab-case slug.",
    inputSchema: {
      type: "object",
      properties: {
        name: {
          type: "string",
          description: "Kebab-case icon slug, e.g. 'check' or 'arrow-right'.",
          pattern: "^[a-z0-9-]+$",
        },
      },
      required: ["name"],
    },
    async execute(args) {
      const name = String(args.name ?? "");
      const tsx = await fetchIconSource(name, "tsx");
      return { content: [{ type: "text", text: tsx }] };
    },
  },
];

export function WebMcpProvider() {
  useEffect(() => {
    const modelContext = navigator.modelContext;
    if (!modelContext?.provideContext) {
      return;
    }
    Promise.resolve(modelContext.provideContext({ tools })).catch(() => {
      // ignored — agents are optional
    });
  }, []);

  return null;
}
