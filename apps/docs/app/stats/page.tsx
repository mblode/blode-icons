import type { Metadata } from "next";

import { StatsClient } from "@/components/stats-client";
import { asset } from "@/lib/config";

export const metadata: Metadata = {
  alternates: { canonical: "/stats" },
  description:
    "Icons fetched and searched by agents via MCP, the HTTP API, and the shadcn registry.",
  title: "Agent stats",
};

export default function StatsPage() {
  return (
    <div className="mx-auto w-full max-w-3xl flex-1 px-4 py-10">
      <h1 className="font-semibold text-2xl tracking-tight">Agent stats</h1>
      <p className="mt-2 text-muted-foreground text-sm">
        Icons fetched and searched by agents via MCP, the HTTP API, and the
        shadcn registry. Events are recorded in the background and never block
        icon delivery.
      </p>
      <StatsClient apiUrl={asset("/api/stats")} mcpUrl={asset("/mcp")} />
    </div>
  );
}
