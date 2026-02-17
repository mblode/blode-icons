import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Chart6Icon = (
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
      d="M9.33 20v-5H5.5c-.8284 0-1.5.6716-1.5 1.5V20zm0 0h5.33m-5.33 0v-9c0-.8284.6716-1.5 1.5-1.5h3.83V20m0 0V5.5c0-.8284.6715-1.5 1.5-1.5h2.33c.8284 0 1.5.6716 1.5 1.5V20zM2 20h20"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(Chart6Icon);
export default ForwardRef;
