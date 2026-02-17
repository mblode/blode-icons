import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const UnlockedIcon = (
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
      d="M8 10h8c1.6569 0 3 1.3431 3 3v5c0 1.6569-1.3431 3-3 3H8c-1.6569 0-3-1.3431-3-3v-5c0-1.6569 1.3431-3 3-3m0 0V7c0-2.2091 1.7909-4 4-4 1.8638 0 3.4299 1.2748 3.874 3M12 14v3"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(UnlockedIcon);
export default ForwardRef;
