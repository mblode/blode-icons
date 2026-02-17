import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ArrowWall2DownIcon = (
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
      d="m7.75 14.5 3.1893 3.1893c.5858.5858 1.5356.5858 2.1213 0L16.25 14.5M12 4v13.25M5 20h14"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(ArrowWall2DownIcon);
export default ForwardRef;
