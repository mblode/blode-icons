import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ArrowUpIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    className="lucide lucide-arrow-up"
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
    <path d="m5 12 7-7 7 7M12 19V5" />
  </svg>
);
const ForwardRef = forwardRef(ArrowUpIcon);
export default ForwardRef;
