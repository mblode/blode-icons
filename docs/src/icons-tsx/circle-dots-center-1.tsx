import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const CircleDotsCenter1Icon = (
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
      d="M21 12c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9Z"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M8 12h.01m.24 0a.25.25 0 1 1-.5 0 .25.25 0 0 1 .5 0ZM12 12h.01m.24 0a.25.25 0 1 1-.5 0 .25.25 0 0 1 .5 0ZM16 12h.01m.24 0a.25.25 0 1 1-.5 0 .25.25 0 0 1 .5 0Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(CircleDotsCenter1Icon);
export default ForwardRef;
