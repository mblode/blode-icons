import { renderZoneOgImage } from "@/app/og-image-shared";
import { OgLogo } from "@/app/og-logo";

export {
  OG_CONTENT_TYPE as contentType,
  OG_SIZE as size,
} from "@/app/og-image-shared";

export const alt = "Blode Icons";

/**
 * The house card (Rule 12), replacing the custom black grid ImageResponse.
 *
 * The matching `twitter-image` is gone rather than converted: Next reuses this
 * route for `twitter:image`, and the old pair were the same design twice.
 */
export default function OpengraphImage() {
  return renderZoneOgImage({
    background: "#f0eee6",
    color: "#e8391c",
    logo: <OgLogo />,
    title: "Blode Icons",
  });
}
