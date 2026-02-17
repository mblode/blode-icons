import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ArrowUpLeftIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    className="lucide lucide-arrow-up-left"
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
    <path d="M7 17V7h10M17 17 7 7" />
  </svg>
);
const ForwardRef = forwardRef(ArrowUpLeftIcon);
export default ForwardRef;
