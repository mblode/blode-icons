import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const CourtIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M4 20h16M6 17V9m4 8V9m4 8V9m4 8V9M5.5 9h13c.8284 0 1.5-.6716 1.5-1.5v-.8972a1.5 1.5 0 0 0-1.0526-1.4317l-6.5-2.0313a1.5 1.5 0 0 0-.8948 0l-6.5 2.0313A1.5 1.5 0 0 0 4 6.6028V7.5C4 8.3284 4.6716 9 5.5 9"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(CourtIcon);
export default ForwardRef;
