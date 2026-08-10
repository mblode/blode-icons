import { mcpServer, siteConfig } from "@/lib/config";

export function GET() {
  const body = {
    capabilities: {
      tools: mcpServer.toolNames,
    },
    description: mcpServer.description,
    name: mcpServer.name,
    schemaVersion: "2024-11-05",
    serverInfo: {
      description: mcpServer.description,
      name: mcpServer.name,
      version: siteConfig.version,
    },
    transport: "http",
    url: mcpServer.url,
  };

  return new Response(JSON.stringify(body, null, 2), {
    headers: {
      "Cache-Control": "public, max-age=0, s-maxage=3600",
      "Content-Type": "application/json; charset=utf-8",
    },
  });
}
