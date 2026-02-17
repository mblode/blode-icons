import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const BagIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M21 13h-9m0 0H3m9 0 .0022 3m9-4v5c0 1.6569-1.3431 3-3 3h-12c-1.6569 0-3-1.3431-3-3v-5M21 12v-1c0-1.6569-1.3431-3-3-3H6c-1.6569 0-3 1.3431-3 3v1m5.0022-4V6c0-1.1046.8954-2 2-2h4c1.1046 0 2 .8954 2 2v2"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(BagIcon);
export default ForwardRef;
