import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ChecklistIcon = (
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
      d="M13 16h7m-7-8h7M4 9l1.5 1 3-4M4 17l1.5 1 3-4"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(ChecklistIcon);
export default ForwardRef;
