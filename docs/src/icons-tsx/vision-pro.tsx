import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const VisionProIcon = (
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
      d="M12 15c-2.5 0-2.5 3-6 3s-5-3-5-6c0-5.5 6-6 11-6s11 .5 11 6c0 2.9355-1.5 6-5 6s-3.5-3-6-3Z"
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(VisionProIcon);
export default ForwardRef;
