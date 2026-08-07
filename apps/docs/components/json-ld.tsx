export const JsonLd = ({ data }: { data: Record<string, unknown> }) => (
  <script
    // biome-ignore lint/security/noDangerouslySetInnerHtml: Next.js recommends a native script for JSON-LD
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(data).replaceAll("<", "\\u003c"),
    }}
    type="application/ld+json"
  />
);
