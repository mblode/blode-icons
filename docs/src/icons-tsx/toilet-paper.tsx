import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ToiletPaperIcon = (
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
      d="M7 4h10c1.6569 0 3 2.6863 3 6v7c0 1.6569-1.3431 3-3 3h-4c-1.6569 0-3-1.3431-3-3v-1M7 4c1.6569 0 3 2.6863 3 6M7 4c-1.6569 0-3 2.6863-3 6s1.3431 6 3 6m3-6v6m0-6c0 3.3137-1.3431 6-3 6m3 0H7"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <path
      d="M7.75 10c0 .6904-.3358 1.25-.75 1.25s-.75-.5596-.75-1.25.3358-1.25.75-1.25.75.5596.75 1.25"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(ToiletPaperIcon);
export default ForwardRef;
