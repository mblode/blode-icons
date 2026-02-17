import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const CheckIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    className="lucide lucide-check"
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
    <path d="M20 6 9 17l-5-5" />
  </svg>
);
const ForwardRef = forwardRef(CheckIcon);
export default ForwardRef;
