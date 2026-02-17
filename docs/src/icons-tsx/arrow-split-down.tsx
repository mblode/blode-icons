import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ArrowSplitDownIcon = (
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
      d="M15 20h5v-5M4 15v5h5M12 12V4m0 8-7 7m7-7 7 7"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(ArrowSplitDownIcon);
export default ForwardRef;
