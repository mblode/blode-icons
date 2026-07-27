import posthog from "posthog-js";

posthog.init("phc_yYatHXysbRxjTyfmyCKSUyMSQpgepJPuxegz2HtpfX35", {
  // Set per Vercel project to our own reverse proxy, so tracker blockers do not
  // drop analytics. Unset falls back to posthog-js's default host.
  api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
  defaults: "2026-05-30",
  ui_host: "https://us.posthog.com",
});
