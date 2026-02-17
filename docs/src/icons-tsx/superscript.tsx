import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const SuperscriptIcon = (
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
      d="M21 11h-4c0-1.884 4-3.202 4-5.0691C21 4.7674 20.1098 4 19.0052 4c-.9669 0-1.6251.5837-1.8809 1.3477M3 6l10 12m0-12L3 18"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(SuperscriptIcon);
export default ForwardRef;
