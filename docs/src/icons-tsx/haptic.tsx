import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const HapticIcon = (
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
      d="M3 17c1.52 0 3.0152-2 4.5-2 1.5054 0 3.0003 2 4.5 2 1.4902 0 2.9851-2 4.5-2 1.4764 0 2.9718 2 4.5 2M3 9c1.52 0 3.0152-2 4.5-2 1.5054 0 3.0003 2 4.5 2 1.4902 0 2.9851-2 4.5-2 1.4764 0 2.9718 2 4.5 2"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(HapticIcon);
export default ForwardRef;
