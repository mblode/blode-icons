import { clientFromRequest, recordAgentEvent } from "@/lib/agent-stats";
import { buildRegistryItem } from "@/lib/registry";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ name: string }> }
) {
  const { name } = await params;
  const slug = name.replace(/\.json$/, "");

  if (!/^[a-z0-9-]+$/.test(slug)) {
    return Response.json(
      { error: "Invalid registry item name" },
      { status: 400 }
    );
  }

  const item = await buildRegistryItem(slug);
  if (!item) {
    return Response.json({ error: "Registry item not found" }, { status: 404 });
  }

  recordAgentEvent({
    client: clientFromRequest(request),
    format: "registry",
    slug,
    source: "registry",
    type: "registry",
    userAgent: request.headers.get("user-agent"),
  });

  return Response.json(item, {
    headers: {
      "Cache-Control": "public, max-age=0, s-maxage=86400",
    },
  });
}
