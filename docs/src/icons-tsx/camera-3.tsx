import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Camera3Icon = (
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
      d="M3 7c0-1.6569 1.3431-3 3-3h12c1.6569 0 3 1.3431 3 3v10c0 1.6569-1.3431 3-3 3H6c-1.6569 0-3-1.3431-3-3z"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <path
      d="M15 12c0 1.6569-1.3431 3-3 3s-3-1.3431-3-3 1.3431-3 3-3 3 1.3431 3 3Z"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <path
      d="M17.5 7.5h.01m.24 0a.25.25 0 1 1-.5 0 .25.25 0 0 1 .5 0Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(Camera3Icon);
export default ForwardRef;
