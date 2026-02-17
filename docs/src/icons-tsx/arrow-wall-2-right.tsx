import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ArrowWall2RightIcon = (
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
      d="m14.5 7.75 3.1893 3.1893c.5858.5858.5858 1.5356 0 2.1213L14.5 16.25M4 12h13.25M20 5v14"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(ArrowWall2RightIcon);
export default ForwardRef;
