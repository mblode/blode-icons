import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ArrowWallDownIcon = (
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
      d="m16.25 13.25-3.1893 3.1893c-.5858.5858-1.5356.5858-2.1213 0L7.75 13.25M12 3v13m7 5H5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(ArrowWallDownIcon);
export default ForwardRef;
