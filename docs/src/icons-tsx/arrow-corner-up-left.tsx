import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ArrowCornerUpLeftIcon = (
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
      d="M20 19v-7c0-1.6569-1.3431-3-3-3H5m3 4L4 9l4-4"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(ArrowCornerUpLeftIcon);
export default ForwardRef;
