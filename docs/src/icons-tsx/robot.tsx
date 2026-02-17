import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const RobotIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M9 10a.5.5 0 0 1-1 0m1 0a.5.5 0 0 0-1 0m1 0H8m8 0a.5.5 0 0 1-1 0m1 0a.5.5 0 0 0-1 0m1 0h-1m-3-5V3M3.5 9c-.5523 0-1 .4477-1 1s.4477 1 1 1m17-2c.5523 0 1 .4477 1 1s-.4477 1-1 1M10 14.5h4M3.5 16V8c0-1.6569 1.3431-3 3-3h11c1.6569 0 3 1.3431 3 3v8c0 1.6569-1.3431 3-3 3h-11c-1.6569 0-3-1.3431-3-3"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(RobotIcon);
export default ForwardRef;
