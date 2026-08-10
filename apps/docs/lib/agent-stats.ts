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
      signal: AbortSignal.timeout(2500),
    });
  } catch {
    // ignored — analytics are best-effort
  }
}

/** Fire-and-forget PostHog capture. Never throws to callers. */
export function recordAgentEvent({
  client,
  userAgent,
  ...partial
}: Omit<AgentStatEvent, "client" | "ts"> & {
  client?: string;
  userAgent?: string | null;
}) {
  const event: AgentStatEvent = {
    ...partial,
    client: client ?? inferClient(userAgent),
    ts: Date.now(),
  };

  void capturePostHog(event);
}
