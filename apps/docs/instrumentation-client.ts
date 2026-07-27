import posthog from "posthog-js";

posthog.init("phc_yYatHXysbRxjTyfmyCKSUyMSQpgepJPuxegz2HtpfX35", {
  // Reverse proxy on our own domain, so tracker blockers do not drop analytics.
  api_host: "https://r.blode.co",
  defaults: "2026-05-30",
  ui_host: "https://us.posthog.com",
});
