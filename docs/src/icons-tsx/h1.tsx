import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const H1Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M3 5v7m0 7v-7m10-7v7m0 7v-7m0 0H3m15 1.5 3-2.5v8"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(H1Icon);
export default ForwardRef;
