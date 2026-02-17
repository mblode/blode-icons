import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const MinusLargeIcon = (
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
      d="M4 12h16"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(MinusLargeIcon);
export default ForwardRef;
