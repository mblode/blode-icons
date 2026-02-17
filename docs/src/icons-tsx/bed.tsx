import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const BedIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M3 14c0-1.6569 1.3431-3 3-3h12c1.6569 0 3 1.3431 3 3v2c0 .5523-.4477 1-1 1H4c-.5523 0-1-.4477-1-1zM19 11V8c0-1.6569-1.3431-3-3-3H8C6.3431 5 5 6.3431 5 8v3M12 5v6M5 17v2M19 17v2"
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
const ForwardRef = forwardRef(BedIcon);
export default ForwardRef;
