import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ArrowOutOfBoxIcon = (
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
      d="M20 12.75V17c0 1.6569-1.3431 3-3 3H7c-1.6569 0-3-1.3431-3-3v-4.25M12 4v11.25M12 4l4.5 4.5M12 4 7.5 8.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(ArrowOutOfBoxIcon);
export default ForwardRef;
