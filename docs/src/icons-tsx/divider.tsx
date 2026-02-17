import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const DividerIcon = (
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
      d="M3 12h18M3 5h2m6 0h2m6 0h2M3 19h2m6 0h2m6 0h2"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(DividerIcon);
export default ForwardRef;
