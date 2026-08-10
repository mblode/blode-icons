import { getAgentStatsSnapshot } from "@/lib/agent-stats";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const limit = Number(url.searchParams.get("limit") ?? "20");
  const snapshot = getAgentStatsSnapshot(
    Number.isFinite(limit) ? Math.min(Math.max(limit, 1), 100) : 20
  );

  return Response.json(snapshot, {
    headers: {
      "Cache-Control": "public, max-age=0, s-maxage=15",
    },
  });
}
