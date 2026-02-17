import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const CalenderTomorrowIcon = (
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
      d="M11.25 12.25 13 14l-1.75 1.75M20 8V7c0-1.6569-1.3431-3-3-3H7C5.3431 4 4 5.3431 4 7v1m16 0v9c0 1.6569-1.3431 3-3 3H7c-1.6569 0-3-1.3431-3-3V8m16 0H4"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(CalenderTomorrowIcon);
export default ForwardRef;
