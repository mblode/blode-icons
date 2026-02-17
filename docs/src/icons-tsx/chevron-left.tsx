import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ChevronLeftIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    className="lucide lucide-chevron-left"
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
    <path d="m15 18-6-6 6-6" />
  </svg>
);
const ForwardRef = forwardRef(ChevronLeftIcon);
export default ForwardRef;
