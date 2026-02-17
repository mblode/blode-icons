import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const PackageSearchFilledIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    fill="none"
    height={24}
    ref={ref}
    viewBox="0 0 24 24"
    width={24}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8 3H7C4.7909 3 3 4.7909 3 7v10c0 2.2091 1.7909 4 4 4h5.5276c-2.1107-2.3558-2.0341-5.9787.2298-8.2426s5.8868-2.3405 8.2426-.2298V7c0-2.2091-1.7909-4-4-4h-1v3.5C16 7.8807 14.8807 9 13.5 9h-3C9.1193 9 8 7.8807 8 6.5z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
    <path
      d="M14 3h-4v3.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
    <path
      clipRule="evenodd"
      d="M19.8284 14.1716c-1.5621-1.5621-4.0947-1.5621-5.6568 0s-1.5621 4.0947 0 5.6568c1.3179 1.318 3.3267 1.524 4.8606.618l1.2607 1.2607c.3905.3905 1.0237.3905 1.4142 0s.3905-1.0237 0-1.4142l-1.2607-1.2607c.906-1.5339.7-3.5427-.618-4.8606m-4.2426 4.2426c-.7811-.781-.7811-2.0474 0-2.8284.781-.7811 2.0474-.7811 2.8284 0 .7811.781.7811 2.0474 0 2.8284-.781.7811-2.0474.7811-2.8284 0"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(PackageSearchFilledIcon);
export default ForwardRef;
