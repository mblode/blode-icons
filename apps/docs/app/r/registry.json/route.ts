import { buildRegistryIndex } from "@/lib/registry";

export function GET() {
  return Response.json(buildRegistryIndex(), {
    headers: {
      "Cache-Control": "public, max-age=0, s-maxage=3600",
    },
  });
}
