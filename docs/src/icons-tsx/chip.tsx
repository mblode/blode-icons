import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ChipIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M8 5.5V4m4 1.5V4m4 1.5V4M8 20v-1.5m4 1.5v-1.5m4 1.5v-1.5M9 15h6c.5523 0 1-.4477 1-1v-4c0-.5523-.4477-1-1-1H9c-.5523 0-1 .4477-1 1v4c0 .5523.4477 1 1 1m-2 5h10c1.6569 0 3-1.3431 3-3V7c0-1.6569-1.3431-3-3-3H7C5.3431 4 4 5.3431 4 7v10c0 1.6569 1.3431 3 3 3"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(ChipIcon);
export default ForwardRef;
