import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const PackageIcon = (
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
      d="M9 4v3.5c0 .8284.6716 1.5 1.5 1.5h3c.8284 0 1.5-.6716 1.5-1.5V4m-1 12h2M4 7v10c0 1.6569 1.3431 3 3 3h10c1.6569 0 3-1.3431 3-3V7c0-1.6569-1.3431-3-3-3H7C5.3431 4 4 5.3431 4 7Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(PackageIcon);
export default ForwardRef;
