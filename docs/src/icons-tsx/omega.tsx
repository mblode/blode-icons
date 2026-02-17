import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const OmegaIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M4 19c0 1.1046.8954 2 2 2h2c1.1046 0 2-.8954 2-2v-1.2696c-3.1712-.8753-5.5-3.7809-5.5-7.2304C4.5 6.3579 7.8579 3 12 3s7.5 3.3579 7.5 7.5c0 3.4495-2.3288 6.3551-5.5 7.2304V19c0 1.1046.8954 2 2 2h2c1.1046 0 2-.8954 2-2"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(OmegaIcon);
export default ForwardRef;
