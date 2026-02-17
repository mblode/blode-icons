import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const CalendarSearch4Icon = (
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
      d="M8 5V3m8 2V3m-2.25 11L15 15.25M7 20h10c1.6569 0 3-1.3431 3-3V8c0-1.6569-1.3431-3-3-3H7C5.3431 5 4 6.3431 4 8v9c0 1.6569 1.3431 3 3 3m7.5-8c0 1.5188-1.2312 2.75-2.75 2.75S9 13.5188 9 12s1.2312-2.75 2.75-2.75S14.5 10.4812 14.5 12"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(CalendarSearch4Icon);
export default ForwardRef;
