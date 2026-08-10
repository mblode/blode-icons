import packageJson from "../../../packages/blode-icons-react/package.json" with { type: "json" };

export const basePath = "/icons";

export const asset = (path: string) => `${basePath}${path}`;

export const siteUrl = `https://blode.co${basePath}`;

export const siteConfig = {
  links: {
    author: "https://blode.co",
    github: "https://github.com/mblode/blode-icons",
  },
  version: packageJson.version,
};

/**
 * Shared by both MCP discovery documents so the advertised tool list cannot
 * drift from what `app/mcp/route.ts` actually registers.
 */
export const mcpServer = {
  description:
    "Search and fetch Blode Icons (MIT) as SVG or React TSX, with Lucide-compatible import snippets.",
  name: "blode-icons",
  toolNames: ["search_icons", "get_icon", "get_usage"],
  url: `${siteUrl}/mcp`,
};
