import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const GraduateCapIcon = (
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
      d="m23 9-11 5L1 9l11-5zm0 0v7M5 11v3.9538a3 3 0 0 0 1.5833 2.6444l4 2.1429a3 3 0 0 0 2.8334 0l4-2.1429A3 3 0 0 0 19 14.9538V11"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(GraduateCapIcon);
export default ForwardRef;
