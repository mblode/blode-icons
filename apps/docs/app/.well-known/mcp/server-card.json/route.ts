import { mcpServer, siteConfig } from "@/lib/config";

export function GET() {
  const body = {
    capabilities: {
      tools: {},
    },
    protocolVersion: "2024-11-05",
    serverInfo: {
      description: mcpServer.description,
      name: mcpServer.name,
      version: siteConfig.version,
      websiteUrl: mcpServer.url,
    },
    tools: mcpServer.toolNames.map((name) => ({ name })),
    transport: {
      type: "http",
      url: mcpServer.url,
    },
  };

  return new Response(JSON.stringify(body, null, 2), {
    headers: {
      "Cache-Control": "public, max-age=0, s-maxage=3600",
      "Content-Type": "application/json; charset=utf-8",
    },
  });
}
