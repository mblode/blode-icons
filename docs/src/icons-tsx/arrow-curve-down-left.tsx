import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ArrowCurveDownLeftIcon = (
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
      d="M6 20v-9.5C6 6.9102 8.9101 4 12.5 4S19 6.9101 19 10.5v.5c0 2.973-2.1623 5.441-5 5.917"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <path
      d="m3 17 3 3 3-3"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(ArrowCurveDownLeftIcon);
export default ForwardRef;
