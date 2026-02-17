import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ArrowUpRightIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    className="lucide lucide-arrow-up-right"
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
    <path d="M7 7h10v10M7 17 17 7" />
  </svg>
);
const ForwardRef = forwardRef(ArrowUpRightIcon);
export default ForwardRef;
