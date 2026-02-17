import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ArrowCornerLeftDownIcon = (
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
      d="M19 4h-7c-1.6569 0-3 1.3431-3 3v12m4-3-4 4-4-4"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(ArrowCornerLeftDownIcon);
export default ForwardRef;
