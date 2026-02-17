import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const SliceIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="m21.0002 19-14.5-14.5c-.8284-.8284-2.1716-.8284-3 0s-.8284 2.1716 0 3l4.5 4.5-3 3c6 6 10 5.5 16 4Z"
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(SliceIcon);
export default ForwardRef;
