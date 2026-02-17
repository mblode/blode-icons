import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const BoldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M13 12H6m7 0c2.2091 0 4-1.7909 4-4s-1.7909-4-4-4H9C7.3431 4 6 5.3431 6 7v5m7 0h1c2.2091 0 4 1.7909 4 4s-1.7909 4-4 4H9c-1.6569 0-3-1.3431-3-3v-5"
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(BoldIcon);
export default ForwardRef;
