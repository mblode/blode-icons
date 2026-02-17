import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ParagraphIcon = (
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
      d="M20 4H7.75c-2.2091 0-4 1.7909-4 4s1.7909 4 4 4H10m0-8v16m5-16v16"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(ParagraphIcon);
export default ForwardRef;
