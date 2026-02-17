import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const BrokenChainLink2Icon = (
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
      d="M16 17h3c1.6569 0 3-1.3431 3-3v-4c0-1.6569-1.3431-3-3-3h-3M8 17H5c-1.6568 0-3-1.3431-3-3v-4c0-1.6569 1.3432-3 3-3h3M10 4 9 2m5 2 1-2m-5 18-1 2m5-2 1 2"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(BrokenChainLink2Icon);
export default ForwardRef;
