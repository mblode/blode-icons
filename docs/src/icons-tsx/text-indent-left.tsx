import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const TextIndentLeftIcon = (
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
      d="M10 6h11m-11 6h11m-11 6h11M5 12H3.5M3 9.34 6 12l-3 2.65z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(TextIndentLeftIcon);
export default ForwardRef;
