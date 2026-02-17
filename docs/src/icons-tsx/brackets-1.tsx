import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Brackets1Icon = (
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
      d="M7 4C5.3431 4 4 5.3431 4 7v10c0 1.6569 1.3431 3 3 3v0M17 4c1.6569 0 3 1.3431 3 3v10c0 1.6569-1.3431 3-3 3v0"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(Brackets1Icon);
export default ForwardRef;
