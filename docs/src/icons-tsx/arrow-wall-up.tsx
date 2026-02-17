import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ArrowWallUpIcon = (
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
      d="m16.25 10.75-3.1893-3.1893c-.5858-.5858-1.5356-.5858-2.1213 0L7.75 10.75M12 21V8m7-5H5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(ArrowWallUpIcon);
export default ForwardRef;
