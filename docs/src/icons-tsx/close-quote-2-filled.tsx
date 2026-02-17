import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const CloseQuote2FilledIcon = (
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
      d="M6 4C3.7909 4 2 5.7909 2 8v2.2308c0 1.8181 1.2872 3.3355 3 3.6906V19c0 .328.1608.6351.4304.8219.5695.3947 1.1758.0313 1.6849-.255a8.16 8.16 0 0 0 1.5686-1.1499C9.8382 17.3349 11 15.5853 11 13V7.999C11 5.7895 9.2087 4 7 4zM17 4c-2.2091 0-4 1.7909-4 4v2.2308c0 1.8181 1.2872 3.3355 3 3.6906V19c0 .328.1608.6351.4304.8219.5695.3947 1.1758.0313 1.6849-.255a8.16 8.16 0 0 0 1.5686-1.1499C20.8382 17.3349 22 15.5853 22 13V7.999C22 5.7895 20.2087 4 18 4z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(CloseQuote2FilledIcon);
export default ForwardRef;
