import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const PeaceFilledIcon = (
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
      d="M11 2.0488v9.5364l-6.743 6.743C2.8464 16.6043 2 14.4007 2 11.9995c0-5.1854 3.9467-9.449 9-9.9507M13 2.0488v9.5364l6.7429 6.743C21.1536 16.6043 22 14.4007 22 11.9995c0-5.1854-3.9467-9.449-9-9.9507M18.3287 19.7424 13 14.4137v7.5364c2.0112-.1997 3.8472-.9953 5.3287-2.2077M11 21.9501v-7.5364l-5.3287 5.3287c1.4816 1.2124 3.3175 2.008 5.3287 2.2077"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(PeaceFilledIcon);
export default ForwardRef;
