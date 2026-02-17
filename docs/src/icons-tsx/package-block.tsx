import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const PackageBlockIcon = (
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
      d="M11 20H7c-1.6569 0-3-1.3431-3-3V7c0-1.6569 1.3431-3 3-3h10c1.6569 0 3 1.3431 3 3v3M9 4v4c0 .5523.4477 1 1 1h4c.5523 0 1-.4477 1-1V4m4.9749 14.9749c1.3668-1.3669 1.3668-3.5829 0-4.9498s-3.5829-1.3668-4.9498 0m4.9498 4.9498c-1.3669 1.3668-3.5829 1.3668-4.9498 0s-1.3668-3.5829 0-4.9498m4.9498 4.9498-4.9498-4.9498"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(PackageBlockIcon);
export default ForwardRef;
