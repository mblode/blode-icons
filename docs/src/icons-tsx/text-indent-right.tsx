import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const TextIndentRightIcon = (
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
      d="M14 6H3m11 6H3m11 6H3m16-6h1.5m.5-2.66L18 12l3 2.65z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(TextIndentRightIcon);
export default ForwardRef;
