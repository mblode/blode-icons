import { isValidIconName } from "@/lib/icon-source";
import { readIconSource } from "@/lib/icon-source-server";

export const runtime = "nodejs";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ icon: string }> },
) {
  const { icon } = await params;

  if (!isValidIconName(icon)) {
    return Response.json({ error: "Invalid icon name" }, { status: 400 });
  }

  const source = await readIconSource(icon, "svg");

  if (!source) {
    return Response.json({ error: "Icon not found" }, { status: 404 });
  }

  return new Response(source, {
    headers: {
      "Content-Type": "image/svg+xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=31536000",
    },
  });
}
