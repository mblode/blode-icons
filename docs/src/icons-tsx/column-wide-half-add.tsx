import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ColumnWideHalfAddIcon = (
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
      d="M3 12v4c0 1.6569 1.3431 3 3 3h5m-8-7V8c0-1.6569 1.3431-3 3-3h12c1.6569 0 3 1.3431 3 3v4zm16 4v3m0 0v3m0-3h-3m3 0h3"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(ColumnWideHalfAddIcon);
export default ForwardRef;
