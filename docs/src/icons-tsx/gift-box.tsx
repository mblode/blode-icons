import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const GiftBoxIcon = (
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
      d="M18 5H6C4.3431 5 3 6.3431 3 8c0 .5523.4477 1 1 1h16c.5523 0 1-.4477 1-1 0-1.6569-1.3431-3-3-3M20 9v7c0 1.6569-1.3431 3-3 3H7c-1.6569 0-3-1.3431-3-3V9M12 5v14"
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
const ForwardRef = forwardRef(GiftBoxIcon);
export default ForwardRef;
