import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ArrowCornerLeftUpIcon = (
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
      d="M19 20h-7c-1.6569 0-3-1.3431-3-3V5m4 3L9 4 5 8"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(ArrowCornerLeftUpIcon);
export default ForwardRef;
