import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const WindowIcon = (
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
      d="M7.4 7.5h.2M4 11V7c0-1.6569 1.3431-3 3-3h10c1.6569 0 3 1.3431 3 3v4M4 11v6c0 1.6569 1.3431 3 3 3h10c1.6569 0 3-1.3431 3-3v-6M4 11h16m-9-3.5h6m-9 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(WindowIcon);
export default ForwardRef;
