import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ArrowMergeLeftIcon = (
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
      d="M15 20h5v-5M20 9V4h-5M12 12H4m8 0 7 7m-7-7 7-7"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(ArrowMergeLeftIcon);
export default ForwardRef;
