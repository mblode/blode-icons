import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const PackageEditIcon = (
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
      d="M11 20H7c-1.6569 0-3-1.3431-3-3V7c0-1.6569 1.3431-3 3-3h10c1.6569 0 3 1.3431 3 3v3M9 4v4c0 .5523.4477 1 1 1h4c.5523 0 1-.4477 1-1V4m0 13.6667v2.3334h2.3333l3.5-3.5c.6444-.6444.6444-1.689 0-2.3334-.6443-.6443-1.689-.6443-2.3333 0z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(PackageEditIcon);
export default ForwardRef;
