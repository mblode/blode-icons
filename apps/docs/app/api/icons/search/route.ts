import { recordAgentEvent } from "@/lib/agent-stats";
import { searchIconDocs } from "@/lib/icon-resolve";
import type { IconStyle } from "@/lib/icon-types";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const query =
    url.searchParams.get("q") ?? url.searchParams.get("query") ?? "";
  const limit = Number(url.searchParams.get("limit") ?? "25");
  const styleParam = url.searchParams.get("style");
  const style =
    styleParam === "SOLID" || styleParam === "OUTLINE"
      ? (styleParam as IconStyle)
      : undefined;

  const results = searchIconDocs({
    limit: Number.isFinite(limit) ? limit : 25,
    query,
    style,
  });

  recordAgentEvent({
    query,
    source: "api",
    type: "search",
    userAgent: request.headers.get("user-agent"),
  });

  return Response.json(
    {
      count: results.length,
      query,
      results,
    },
    {
      headers: {
        "Cache-Control": "public, max-age=0, s-maxage=60",
      },
    }
  );
}
