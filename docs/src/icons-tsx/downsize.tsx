import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const DownsizeIcon = (
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
      d="M4 9h2c1.6569 0 3-1.3431 3-3V4M20 9h-2c-1.6569 0-3-1.3431-3-3V4M15 20v-2c0-1.6569 1.3431-3 3-3h2M4 15h2c1.6569 0 3 1.3431 3 3v2"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      style={{
        stroke: "currentColor",
        strokeOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(DownsizeIcon);
export default ForwardRef;
