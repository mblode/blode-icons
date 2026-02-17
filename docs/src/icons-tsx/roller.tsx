import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const RollerIcon = (
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
    <circle
      cx={5.5}
      cy={16.5}
      r={2.5}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <circle
      cx={18.5}
      cy={16.5}
      r={2.5}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <path
      d="m18.25 13.75-1.2677-6.3383C16.7019 6.0093 15.4706 5 14.0406 5H14M8.5 16.5h7"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(RollerIcon);
export default ForwardRef;
