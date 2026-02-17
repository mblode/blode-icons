import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ArrowsAllSides2Icon = (
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
      d="M8 4H7C5.3431 4 4 5.3431 4 7v1m12-4h1c1.6569 0 3 1.3431 3 3v1m0 8v1c0 1.6569-1.3431 3-3 3h-1m-8 0H7c-1.6569 0-3-1.3431-3-3v-1"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(ArrowsAllSides2Icon);
export default ForwardRef;
