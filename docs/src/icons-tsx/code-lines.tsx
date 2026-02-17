import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const CodeLinesIcon = (
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
      d="M3 5h10m5 0h3M3 12h5m5 0h8M3 19h7m5 0h6"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(CodeLinesIcon);
export default ForwardRef;
