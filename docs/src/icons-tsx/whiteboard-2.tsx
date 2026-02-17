import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Whiteboard2Icon = (
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
      d="M19.9997 5v14m0-14h-8m8 0H21m-1.0003 14h-16m16 0H3h.9997m16 0H21M3.9997 19V5m0 0h8m-8 0H3m8.9997 0V3"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(Whiteboard2Icon);
export default ForwardRef;
