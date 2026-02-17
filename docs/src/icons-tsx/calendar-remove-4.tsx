import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const CalendarRemove4Icon = (
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
      d="M8 5V3m8 2V3m-6.252 7.25 4.5017 4.5017m.002-4.5017L9.75 14.7517M7 20h10c1.6569 0 3-1.3431 3-3V8c0-1.6569-1.3431-3-3-3H7C5.3431 5 4 6.3431 4 8v9c0 1.6569 1.3431 3 3 3"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(CalendarRemove4Icon);
export default ForwardRef;
