import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const PackageOutIcon = (
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
      d="M4 9V7c0-1.6569 1.3431-3 3-3h10c1.6569 0 3 1.3431 3 3v10c0 1.6569-1.3431 3-3 3h-3"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      style={{
        stroke: "currentColor",
        strokeOpacity: 1,
      }}
    />
    <path
      d="M9 4v3c0 1.1046.8954 2 2 2h2c1.1046 0 2-.8954 2-2V4M9 20v-2c0-1.1046-.8954-2-2-2H3.5m1-2-2 2 2 2"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      style={{
        stroke: "currentColor",
        strokeOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(PackageOutIcon);
export default ForwardRef;
