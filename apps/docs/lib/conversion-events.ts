import posthog from "posthog-js";

/** Action intent only: no copied SVG, code, prompt, or customer content. */
export const captureIconAction = (
  event: "cta_clicked" | "download_clicked",
  label: string,
  location: string,
  icon?: string
): void => {
  try {
    posthog.capture(event, {
      label,
      location,
      product: "icons",
      ...(icon ? { icon } : {}),
    });
  } catch {
    // Analytics must not interrupt copying or saving an icon.
  }
};

export const copyIconContent = async (
  content: string,
  label: string,
  location: string,
  icon?: string
): Promise<void> => {
  await navigator.clipboard.writeText(content);
  captureIconAction("cta_clicked", label, location, icon);
};
