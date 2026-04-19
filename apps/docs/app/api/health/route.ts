export const dynamic = "force-static";

export function GET() {
  return Response.json(
    { status: "ok" },
    {
      headers: {
        "Cache-Control": "public, max-age=0, s-maxage=60",
      },
    }
  );
}
