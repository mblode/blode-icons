import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const FocusLockIcon = (
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
      d="M4 8V7c0-1.6569 1.3431-3 3-3h1M4 16v1c0 1.6569 1.3431 3 3 3h1m8-16h1c1.6569 0 3 1.3431 3 3v1m0 8v1c0 1.6569-1.3431 3-3 3h-1m-5.5-5h3c.8284 0 1.5-.6716 1.5-1.5v-1c0-.8284-.6716-1.5-1.5-1.5h-3c-.8284 0-1.5.6716-1.5 1.5v1c0 .8284.6716 1.5 1.5 1.5m3.5-4v-1c0-1.1046-.8954-2-2-2s-2 .8954-2 2v1z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(FocusLockIcon);
export default ForwardRef;
