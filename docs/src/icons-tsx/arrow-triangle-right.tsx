import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ArrowTriangleRightIcon = (
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
      d="M5 17.0021V6.9979c0-1.4833 1.5615-2.448 2.8887-1.7847l10.0079 5.0022c1.4712.7353 1.4712 2.8339 0 3.5692l-10.008 5.0022C6.5617 19.4501 5 18.4854 5 17.0021Z"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(ArrowTriangleRightIcon);
export default ForwardRef;
