import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const VerticalAlignmentRightIcon = (
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
      d="M20 4v16M14.5 7h-9C4.6716 7 4 7.6716 4 8.5S4.6716 10 5.5 10h9c.8284 0 1.5-.6716 1.5-1.5S15.3284 7 14.5 7M14.5 14h-5c-.8284 0-1.5.6716-1.5 1.5S8.6716 17 9.5 17h5c.8284 0 1.5-.6716 1.5-1.5s-.6716-1.5-1.5-1.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(VerticalAlignmentRightIcon);
export default ForwardRef;
