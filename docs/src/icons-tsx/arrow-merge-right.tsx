import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ArrowMergeRightIcon = (
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
      d="M9 20H4v-5M4 9V4h5M12 12h8m-8 0-7 7m7-7L5 5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(ArrowMergeRightIcon);
export default ForwardRef;
