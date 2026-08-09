import { siteConfig, siteUrl } from "@/lib/config";

export function GET() {
  const body = {
    capabilities: {
      tools: ["search_icons", "get_icon"],
    },
    description:
      "Search and fetch Blode Icons (MIT) as SVG or React TSX, with Lucide-compatible import snippets.",
    name: "blode-icons",
    schemaVersion: "2024-11-05",
    serverInfo: {
      description:
        "Search and fetch Blode Icons (MIT) as SVG or React TSX, with Lucide-compatible import snippets.",
      name: "blode-icons",
      version: siteConfig.version,
    },
    transport: "http",
    url: `${siteUrl}/mcp`,
  };

  return new Response(JSON.stringify(body, null, 2), {
    headers: {
      "Cache-Control": "public, max-age=0, s-maxage=3600",
      "Content-Type": "application/json; charset=utf-8",
    },
  });
}
