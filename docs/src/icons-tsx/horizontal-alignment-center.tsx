import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const HorizontalAlignmentCenterIcon = (
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
      d="M4 12h3m10 0h3m-10 0h4M8.5 5C7.6716 5 7 5.6716 7 6.5v11c0 .8284.6716 1.5 1.5 1.5s1.5-.6716 1.5-1.5v-11C10 5.6716 9.3284 5 8.5 5M15.5 7c-.8284 0-1.5.6716-1.5 1.5v7c0 .8284.6716 1.5 1.5 1.5s1.5-.6716 1.5-1.5v-7c0-.8284-.6716-1.5-1.5-1.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(HorizontalAlignmentCenterIcon);
export default ForwardRef;
