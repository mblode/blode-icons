import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const VerticalAlignmentCenterIcon = (
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
      d="M12 4v3m0 10v3m0-10v4M17.5 7h-11C5.6716 7 5 7.6716 5 8.5S5.6716 10 6.5 10h11c.8284 0 1.5-.6716 1.5-1.5S18.3284 7 17.5 7M15.5 14h-7c-.8284 0-1.5.6716-1.5 1.5S7.6716 17 8.5 17h7c.8284 0 1.5-.6716 1.5-1.5s-.6716-1.5-1.5-1.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(VerticalAlignmentCenterIcon);
export default ForwardRef;
