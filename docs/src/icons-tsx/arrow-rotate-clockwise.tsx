import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ArrowRotateClockwiseIcon = (
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
      d="M19.5165 14.6667C18.4182 17.7738 15.4549 20 11.9717 20c-4.4183 0-8-3.5817-8-8s3.5817-8 8-8c2.8836 0 4.7578 1.3014 6.6174 3.5M19 4v3c0 .5523-.4477 1-1 1h-3"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(ArrowRotateClockwiseIcon);
export default ForwardRef;
