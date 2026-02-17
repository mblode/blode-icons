import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ArrowRotateCounterClockwiseIcon = (
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
      d="M4.4834 14.6667C5.5816 17.7738 8.5449 20 12.0282 20c4.4183 0 8-3.5817 8-8s-3.5817-8-8-8C9.1445 4 7.2703 5.3014 5.4107 7.5M5 4v3c0 .5523.4477 1 1 1h3"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(ArrowRotateCounterClockwiseIcon);
export default ForwardRef;
