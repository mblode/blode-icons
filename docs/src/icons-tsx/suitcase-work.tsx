import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const SuitcaseWorkIcon = (
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
      d="M8 7H6c-1.6569 0-3 1.3431-3 3v7c0 1.6569 1.3431 3 3 3h12c1.6569 0 3-1.3431 3-3v-7c0-1.6569-1.3431-3-3-3h-2M8 7V6c0-1.6569 1.3431-3 3-3h2c1.6569 0 3 1.3431 3 3v1M8 7h8"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(SuitcaseWorkIcon);
export default ForwardRef;
