export const JsonLd = ({ data }: { data: Record<string, unknown> }) => (
  <script
    // Next.js recommends a native script element for JSON-LD.
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(data).replaceAll("<", "\\u003c"),
    }}
    type="application/ld+json"
  />
);
