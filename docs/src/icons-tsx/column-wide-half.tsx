import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ColumnWideHalfIcon = (
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
      d="M3 12v4c0 1.6569 1.3431 3 3 3h12c1.6569 0 3-1.3431 3-3v-4M3 12V8c0-1.6569 1.3431-3 3-3h12c1.6569 0 3 1.3431 3 3v4M3 12h18"
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(ColumnWideHalfIcon);
export default ForwardRef;
