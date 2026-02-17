import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ArrowDownLeftIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    className="lucide lucide-arrow-down-left"
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
    <path d="M17 7 7 17M17 17H7V7" />
  </svg>
);
const ForwardRef = forwardRef(ArrowDownLeftIcon);
export default ForwardRef;
