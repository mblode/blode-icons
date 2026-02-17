import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const CalendarTearOffIcon = (
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
      d="M8 5H7C5.3431 5 4 6.3431 4 8v9c0 1.6569 1.3431 3 3 3h10c1.6569 0 3-1.3431 3-3V8c0-1.6569-1.3431-3-3-3h-1M8 5h8M8 5V3m8 2V3M4.5 9 8 10l3-1 2.5 1 1-1 3.5.5 1.5-.375"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(CalendarTearOffIcon);
export default ForwardRef;
