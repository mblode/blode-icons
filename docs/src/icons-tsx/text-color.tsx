import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const TextColorIcon = (
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
      d="M21 7.375C21 8.7281 19.8807 10 18.5 10S16 8.7281 16 7.375C16 5.625 18.5 3 18.5 3S21 5.625 21 7.375M3 20l7-15 7 15M6 15h8"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(TextColorIcon);
export default ForwardRef;
