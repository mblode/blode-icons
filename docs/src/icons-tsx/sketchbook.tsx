import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const SketchbookIcon = (
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
      d="M9 8h6m-6 4h3m7.5-5.5v11c0 1.6569-1.3431 3-3 3h-9c-1.6569 0-3-1.3431-3-3v-11c0-1.6569 1.3431-3 3-3h9c1.6569 0 3 1.3431 3 3"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(SketchbookIcon);
export default ForwardRef;
