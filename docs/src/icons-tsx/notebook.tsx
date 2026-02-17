import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const NotebookIcon = (
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
      d="M9 3.5H7.5c-1.6569 0-3 1.3431-3 3v11c0 1.6569 1.3431 3 3 3H9m0-17h7.5c1.6569 0 3 1.3431 3 3v11c0 1.6569-1.3431 3-3 3H9m0-17v17M13 8h2.5M13 12h2.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(NotebookIcon);
export default ForwardRef;
