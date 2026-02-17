import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Whiteboard1Icon = (
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
      d="M16 18h2c1.6569 0 3-1.3431 3-3V8c0-1.6569-1.3431-3-3-3h-6m4 13 1 3m-1-3H8m0 0H6c-1.6569 0-3-1.3431-3-3V8c0-1.6569 1.3431-3 3-3h6M8 18l-1 3m5-3v2m0-15V3"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(Whiteboard1Icon);
export default ForwardRef;
