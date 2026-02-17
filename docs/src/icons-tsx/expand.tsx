import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ExpandIcon = (
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
      d="M4 10V7c0-1.6569 1.3431-3 3-3h11c1.6569 0 3 1.3431 3 3v5c0 1.6569-1.3431 3-3 3h-3m2-7v3m0-3h-3m3 0-3 3M9 21H5c-1.1046 0-2-.8954-2-2v-3c0-1.1046.8954-2 2-2h4c1.1046 0 2 .8954 2 2v3c0 1.1046-.8954 2-2 2"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(ExpandIcon);
export default ForwardRef;
