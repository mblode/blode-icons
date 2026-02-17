import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const HorizontalAlignmentTopIcon = (
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
      d="M4 4h16M15.5 8c-.8284 0-1.5.6716-1.5 1.5v5c0 .8284.6716 1.5 1.5 1.5s1.5-.6716 1.5-1.5v-5c0-.8284-.6716-1.5-1.5-1.5M8.5 8C7.6716 8 7 8.6716 7 9.5v9c0 .8284.6716 1.5 1.5 1.5s1.5-.6716 1.5-1.5v-9C10 8.6716 9.3284 8 8.5 8"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(HorizontalAlignmentTopIcon);
export default ForwardRef;
