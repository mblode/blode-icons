import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Camera4Icon = (
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
      d="M17 12c0 1.6569-1.3431 3-3 3s-3-1.3431-3-3 1.3431-3 3-3 3 1.3431 3 3Z"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <path
      d="M21 16V8c0-1.6569-1.3431-3-3-3H9.6716a.414.414 0 0 1-.293-.1213A3 3 0 0 0 7.2575 4h-.5148a3 3 0 0 0-1.803.6023c-.2237.1682-.3871.4006-.5228.6454l-.18.3248C3.4874 6.118 3 7.0021 3 8v8c0 1.6569 1.3431 3 3 3h12c1.6569 0 3-1.3431 3-3Z"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <path
      d="M7 9h.01"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(Camera4Icon);
export default ForwardRef;
