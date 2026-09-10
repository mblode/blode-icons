import posthog from "posthog-js";

import { copyText } from "@/lib/clipboard";

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

/**
 * `content` may be a promise for source that is still being fetched, so the
 * clipboard write can be registered inside the tap that asked for it. See
 * `lib/clipboard`.
 */
export const copyIconContent = async (
  content: string | Promise<string>,
  label: string,
  location: string,
  icon?: string
): Promise<void> => {
  await copyText(content);
  captureIconAction("cta_clicked", label, location, icon);
};
