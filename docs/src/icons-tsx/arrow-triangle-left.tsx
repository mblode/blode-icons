import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ArrowTriangleLeftIcon = (
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
      d="M19 17.0021V6.9979c0-1.4833-1.5615-2.448-2.8887-1.7847l-10.008 5.0022c-1.471.7353-1.471 2.8339 0 3.5692l10.008 5.0022C17.4385 19.4501 19 18.4854 19 17.0021Z"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(ArrowTriangleLeftIcon);
export default ForwardRef;
