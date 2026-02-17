import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const CalenderNextWeekIcon = (
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
      d="m9 12.5 1.5 1.5L9 15.5m4.75-3 1.5 1.5-1.5 1.5M20 8V7c0-1.6569-1.3431-3-3-3H7C5.3431 4 4 5.3431 4 7v1m16 0v9c0 1.6569-1.3431 3-3 3H7c-1.6569 0-3-1.3431-3-3V8m16 0H4"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(CalenderNextWeekIcon);
export default ForwardRef;
