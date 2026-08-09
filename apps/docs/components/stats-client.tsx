"use client";

import { useEffect, useState } from "react";

interface AgentStatsSnapshot {
  clients: { client: string; count: number }[];
  distinctIcons: number;
  since: string | null;
  topIcons: { count: number; slug: string }[];
  topQueries: { count: number; query: string }[];
  totalEvents: number;
  totalGets: number;
  totalRegistry: number;
  totalSearches: number;
}

export function StatsClient({
  apiUrl,
  mcpUrl,
}: {
  apiUrl: string;
  mcpUrl: string;
}) {
  const [stats, setStats] = useState<AgentStatsSnapshot | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      try {
        const response = await fetch(apiUrl, { cache: "no-store" });
        if (!response.ok) {
          throw new Error(`Failed to load stats (${response.status})`);
        }
        const json = (await response.json()) as AgentStatsSnapshot;
        if (!cancelled) {
          setStats(json);
          setError(null);
        }
      } catch (loadError) {
        if (!cancelled) {
          setError(
            loadError instanceof Error ? loadError.message : "Failed to load"
          );
        }
      }
    };
    void load();
    const id = window.setInterval(load, 15_000);
    return () => {
      cancelled = true;
      window.clearInterval(id);
    };
  }, [apiUrl]);

  if (error) {
    return <p className="mt-8 text-destructive text-sm">{error}</p>;
  }

  if (!stats) {
    return <p className="mt-8 text-muted-foreground text-sm">Loading stats…</p>;
  }

  return (
    <>
      <dl className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
        <div>
          <dt className="text-muted-foreground text-xs uppercase">Gets</dt>
          <dd className="font-semibold text-2xl">{stats.totalGets}</dd>
        </div>
        <div>
          <dt className="text-muted-foreground text-xs uppercase">Searches</dt>
          <dd className="font-semibold text-2xl">{stats.totalSearches}</dd>
        </div>
        <div>
          <dt className="text-muted-foreground text-xs uppercase">
            Distinct icons
          </dt>
          <dd className="font-semibold text-2xl">{stats.distinctIcons}</dd>
        </div>
        <div>
          <dt className="text-muted-foreground text-xs uppercase">Registry</dt>
          <dd className="font-semibold text-2xl">{stats.totalRegistry}</dd>
        </div>
      </dl>

      <section className="mt-10">
        <h2 className="font-medium text-lg">Top icons</h2>
        {stats.topIcons.length === 0 ? (
          <p className="mt-2 text-muted-foreground text-sm">
            No fetches yet. Connect an MCP client to{" "}
            <code className="text-foreground">{mcpUrl}</code>.
          </p>
        ) : (
          <ol className="mt-3 space-y-1 text-sm">
            {stats.topIcons.map((item, index) => (
              <li className="flex justify-between gap-4" key={item.slug}>
                <span>
                  <span className="text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>{" "}
                  {item.slug}
                </span>
                <span className="text-muted-foreground">{item.count}</span>
              </li>
            ))}
          </ol>
        )}
      </section>

      <section className="mt-10">
        <h2 className="font-medium text-lg">Top searches</h2>
        {stats.topQueries.length === 0 ? (
          <p className="mt-2 text-muted-foreground text-sm">No searches yet.</p>
        ) : (
          <ol className="mt-3 space-y-1 text-sm">
            {stats.topQueries.map((item, index) => (
              <li className="flex justify-between gap-4" key={item.query}>
                <span>
                  <span className="text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>{" "}
                  {item.query}
                </span>
                <span className="text-muted-foreground">{item.count}</span>
              </li>
            ))}
          </ol>
        )}
      </section>

      <section className="mt-10">
        <h2 className="font-medium text-lg">Clients</h2>
        {stats.clients.length === 0 ? (
          <p className="mt-2 text-muted-foreground text-sm">No clients yet.</p>
        ) : (
          <ol className="mt-3 space-y-1 text-sm">
            {stats.clients.map((item) => (
              <li className="flex justify-between gap-4" key={item.client}>
                <span>{item.client}</span>
                <span className="text-muted-foreground">{item.count}</span>
              </li>
            ))}
          </ol>
        )}
      </section>

      {stats.since ? (
        <p className="mt-10 text-muted-foreground text-xs">
          Process window since {new Date(stats.since).toLocaleString()}. JSON:{" "}
          <a className="underline" href={apiUrl}>
            /api/stats
          </a>
        </p>
      ) : null}
    </>
  );
}
