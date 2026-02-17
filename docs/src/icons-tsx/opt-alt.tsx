import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const OptAltIcon = (
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
      d="M4 19h2.259a3 3 0 0 0 2.6048-1.5116l6.2724-10.9768A3 3 0 0 1 17.741 5H20m0 14h-4"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(OptAltIcon);
export default ForwardRef;
