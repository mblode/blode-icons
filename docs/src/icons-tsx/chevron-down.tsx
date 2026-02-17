import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ChevronDownIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    className="lucide lucide-chevron-down"
    fill="none"
    height={24}
    ref={ref}
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    viewBox="0 0 24 24"
    width={24}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);
const ForwardRef = forwardRef(ChevronDownIcon);
export default ForwardRef;
