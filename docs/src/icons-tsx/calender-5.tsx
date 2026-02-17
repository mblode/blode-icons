import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Calender5Icon = (
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
      d="M4 9v8c0 1.6569 1.3431 3 3 3h10c1.6569 0 3-1.3431 3-3V9M4 9V7c0-1.6569 1.3431-3 3-3h1M4 9h16m0 0V7c0-1.6569-1.3431-3-3-3h-1M8 4v1.5M8 4h8m0 0v1.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(Calender5Icon);
export default ForwardRef;
