import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const VisionProAppIcon = (
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
      d="M1 9v4m18 4c1.6569 0 3-1.3431 3-3V8c0-1.6569-1.3431-3-3-3H7C5.3431 5 4 6.3431 4 8v6c0 1.6569 1.3431 3 3 3v0m12 .5c0 .8284-.6716 1.5-1.5 1.5h-9c-.8284 0-1.5-.6716-1.5-1.5v0c0-.8284.6716-1.5 1.5-1.5h9c.8284 0 1.5.6716 1.5 1.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(VisionProAppIcon);
export default ForwardRef;
