import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Chart5Icon = (
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
      d="M9.33 20v-6H5.5c-.8284 0-1.5.6716-1.5 1.5v3c0 .8284.6716 1.5 1.5 1.5zm0 0h5.33m-5.33 0V5.5c0-.8284.6716-1.5 1.5-1.5h2.33c.8284 0 1.5.6716 1.5 1.5V20m0 0V9h3.83c.8284 0 1.5.6716 1.5 1.5v8c0 .8284-.6716 1.5-1.5 1.5z"
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(Chart5Icon);
export default ForwardRef;
