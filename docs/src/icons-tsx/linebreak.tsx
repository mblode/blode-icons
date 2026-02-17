import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const LinebreakIcon = (
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
      d="M4 12h12.75c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5H13m-9 0h3M4 5h16m-5.5 11.5L12 19l2.5 2.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(LinebreakIcon);
export default ForwardRef;
