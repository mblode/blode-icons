import "server-only";

export type AgentStatEventType = "search" | "get" | "registry";

export interface AgentStatEvent {
  client: string;
  format?: string;
  lucideAlias?: string;
  query?: string;
  slug?: string;
  source: "api" | "mcp" | "webmcp" | "registry";
  ts: number;
  type: AgentStatEventType;
}

interface AggregateBucket {
  clients: Record<string, number>;
  count: number;
}

export interface AgentStatsSnapshot {
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

const globalStore = globalThis as typeof globalThis & {
  __blodeAgentStats?: {
    byClient: Map<string, number>;
    byQuery: Map<string, AggregateBucket>;
    bySlug: Map<string, AggregateBucket>;
    events: AgentStatEvent[];
    startedAt: number;
    totalGets: number;
    totalRegistry: number;
    totalSearches: number;
  };
};

function store() {
  if (!globalStore.__blodeAgentStats) {
    globalStore.__blodeAgentStats = {
      byClient: new Map(),
      byQuery: new Map(),
      bySlug: new Map(),
      events: [],
      startedAt: Date.now(),
      totalGets: 0,
      totalRegistry: 0,
      totalSearches: 0,
    };
  }
  return globalStore.__blodeAgentStats;
}

function bump(map: Map<string, AggregateBucket>, key: string, client: string) {
  const current = map.get(key) ?? { clients: {}, count: 0 };
  current.count += 1;
  current.clients[client] = (current.clients[client] ?? 0) + 1;
  map.set(key, current);
}

function inferClient(userAgent: string | null | undefined) {
  const ua = (userAgent ?? "").toLowerCase();
  if (!ua) {
    return "unknown";
  }
  if (ua.includes("claude")) {
    return "claude";
  }
  if (ua.includes("cursor")) {
    return "cursor";
  }
  if (ua.includes("codex")) {
    return "codex";
  }
  if (ua.includes("opencode")) {
    return "opencode";
  }
  if (ua.includes("windsurf") || ua.includes("cascade")) {
    return "windsurf";
  }
  if (ua.includes("mcp")) {
    return "mcp-client";
  }
  if (
    ua.includes("mozilla") ||
    ua.includes("chrome") ||
    ua.includes("safari")
  ) {
    return "browser";
  }
  return ua.slice(0, 48);
}

async function capturePostHog(event: AgentStatEvent) {
  const apiKey =
    process.env.NEXT_PUBLIC_POSTHOG_KEY ??
    process.env.POSTHOG_KEY ??
    "phc_yYatHXysbRxjTyfmyCKSUyMSQpgepJPuxegz2HtpfX35";
  const host =
    process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com";

  try {
    await fetch(`${host.replace(/\/$/, "")}/capture/`, {
      body: JSON.stringify({
        api_key: apiKey,
        distinct_id: `agent:${event.client}`,
        event: `icon_agent_${event.type}`,
        properties: {
          ...event,
          $lib: "blode-icons-agent-stats",
        },
        timestamp: new Date(event.ts).toISOString(),
      }),
      headers: { "Content-Type": "application/json" },
      method: "POST",
      // Never block icon delivery on analytics
      signal: AbortSignal.timeout(2500),
    });
  } catch {
    // ignored — stats are best-effort
  }
}

function recordLocal(event: AgentStatEvent) {
  const state = store();
  state.events.push(event);
  if (state.events.length > 5000) {
    state.events.splice(0, state.events.length - 5000);
  }
  state.byClient.set(event.client, (state.byClient.get(event.client) ?? 0) + 1);
  if (event.type === "search") {
    state.totalSearches += 1;
    if (event.query) {
      bump(state.byQuery, event.query.toLowerCase(), event.client);
    }
  } else if (event.type === "get") {
    state.totalGets += 1;
    if (event.slug) {
      bump(state.bySlug, event.slug, event.client);
    }
  } else if (event.type === "registry") {
    state.totalRegistry += 1;
    if (event.slug) {
      bump(state.bySlug, event.slug, event.client);
    }
  }
}

/**
 * Fire-and-forget agent usage tracking. Safe to call from route handlers —
 * never throws to callers.
 */
export function recordAgentEvent({
  client,
  userAgent,
  ...partial
}: Omit<AgentStatEvent, "client" | "ts"> & {
  client?: string;
  userAgent?: string | null;
}) {
  // `userAgent` is destructured out so the raw header never reaches the stored
  // event or PostHog — only the coarse client bucket it resolves to.
  const event: AgentStatEvent = {
    ...partial,
    client: client ?? inferClient(userAgent),
    ts: Date.now(),
  };

  try {
    recordLocal(event);
  } catch {
    // ignored
  }

  // Background PostHog capture — do not await in the request path.
  void capturePostHog(event);
}

export function getAgentStatsSnapshot(limit = 20): AgentStatsSnapshot {
  const state = store();
  const topIcons = [...state.bySlug.entries()]
    .map(([slug, bucket]) => ({ count: bucket.count, slug }))
    .toSorted((a, b) => b.count - a.count)
    .slice(0, limit);
  const topQueries = [...state.byQuery.entries()]
    .map(([query, bucket]) => ({ count: bucket.count, query }))
    .toSorted((a, b) => b.count - a.count)
    .slice(0, limit);
  const clients = [...state.byClient.entries()]
    .map(([client, count]) => ({ client, count }))
    .toSorted((a, b) => b.count - a.count);

  return {
    clients,
    distinctIcons: state.bySlug.size,
    since:
      state.events.length > 0 ? new Date(state.startedAt).toISOString() : null,
    topIcons,
    topQueries,
    totalEvents: state.events.length,
    totalGets: state.totalGets,
    totalRegistry: state.totalRegistry,
    totalSearches: state.totalSearches,
  };
}
