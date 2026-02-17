import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const LineThicknessIcon = (
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
      d="M4.75 5.75h14.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
    />
    <path
      d="M5.75 17.25h12.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={3.5}
    />
    <path
      d="M5.25 11h13.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2.5}
    />
  </svg>
);
const ForwardRef = forwardRef(LineThicknessIcon);
export default ForwardRef;
