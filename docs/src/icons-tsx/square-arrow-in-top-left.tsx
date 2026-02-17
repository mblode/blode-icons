import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const SquareArrowInTopLeftIcon = (
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
      d="M14 7h4c1.6569 0 3 1.3431 3 3v8c0 1.6569-1.3431 3-3 3h-8c-1.6569 0-3-1.3431-3-3v-4m2-5L4 4m6 0v5c0 .5523-.4477 1-1 1H4"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(SquareArrowInTopLeftIcon);
export default ForwardRef;
