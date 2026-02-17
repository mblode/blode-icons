import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ArrowDownRightIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    className="lucide lucide-arrow-down-right"
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
    <path d="m7 7 10 10M17 7v10H7" />
  </svg>
);
const ForwardRef = forwardRef(ArrowDownRightIcon);
export default ForwardRef;
