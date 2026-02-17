import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const SlidesTallAddIcon = (
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
      d="M15 7V6c0-1.6569-1.3431-3-3-3H8C6.3431 3 5 4.3431 5 6v8c0 1.6569 1.3431 3 3 3h1m5-5v2m0 0v2m0-2h-2m2 0h2m0 7h-4c-1.6569 0-3-1.3431-3-3v-8c0-1.6569 1.3431-3 3-3h4c1.6569 0 3 1.3431 3 3v8c0 1.6569-1.3431 3-3 3Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(SlidesTallAddIcon);
export default ForwardRef;
