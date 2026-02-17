import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ToolboxIcon = (
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
      d="M13 11V4c0-.5523.4477-1 1-1h4c.5523 0 1 .4477 1 1v7m-5.9961-4h2m-10 4V6.5523a3 3 0 0 1 .6574-1.874l1.0303-1.2879a1.0403 1.0403 0 0 1 1.6247 0l1.0302 1.2879a3 3 0 0 1 .6574 1.874V11M3 11h18v6c0 1.6569-1.3431 3-3 3H6c-1.6569 0-3-1.3431-3-3z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(ToolboxIcon);
export default ForwardRef;
