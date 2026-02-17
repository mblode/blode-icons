import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const InfoIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
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
    <path d="M12 21V10m0-7h.01" />
  </svg>
);
const ForwardRef = forwardRef(InfoIcon);
export default ForwardRef;
