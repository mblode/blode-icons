import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ArrowWallRightIcon = (
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
      d="m13.25 7.75 3.1893 3.1893c.5858.5858.5858 1.5356 0 2.1213L13.25 16.25M3 12h13m5-7v14"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(ArrowWallRightIcon);
export default ForwardRef;
