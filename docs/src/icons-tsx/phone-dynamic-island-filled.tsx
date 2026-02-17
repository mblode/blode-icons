import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const PhoneDynamicIslandFilledIcon = (
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
      clipRule="evenodd"
      d="M8 23c-1.6569 0-3-1.3431-3-3V4c0-1.6568 1.3431-3 3-3h8c1.6569 0 3 1.3432 3 3v16c0 1.6569-1.3431 3-3 3zm3-19c-.5523 0-1 .4477-1 1s.4477 1 1 1h2c.5523 0 1-.4477 1-1s-.4477-1-1-1z"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(PhoneDynamicIslandFilledIcon);
export default ForwardRef;
