import { clientFromRequest, recordAgentEvent } from "@/lib/agent-stats";
import { isValidIconName } from "@/lib/icon-source";
import { readIconSource } from "@/lib/icon-source-server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ icon: string }> }
) {
  const { icon } = await params;

  if (!isValidIconName(icon)) {
    return Response.json({ error: "Invalid icon name" }, { status: 400 });
  }

  const source = await readIconSource(icon, "tsx");

  if (!source) {
    return Response.json({ error: "Icon not found" }, { status: 404 });
  }

  recordAgentEvent({
    client: clientFromRequest(request),
    format: "tsx",
    slug: icon,
    source: "api",
    type: "get",
    userAgent: request.headers.get("user-agent"),
  });

  return new Response(source, {
    headers: {
      "Cache-Control": "public, max-age=0, s-maxage=31536000",
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
