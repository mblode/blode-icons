import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Box2AltFillIcon = (
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
      d="M4 13v4c0 1.6569 1.3431 3 3 3h10c1.6569 0 3-1.3431 3-3v-4M4 13V7c0-1.6569 1.3432-3 3-3h10c1.6569 0 3 1.3431 3 3v6M4 13h4.126c.444 1.7252 2.0102 3 3.874 3s3.4299-1.2748 3.874-3H20"
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(Box2AltFillIcon);
export default ForwardRef;
