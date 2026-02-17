import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const PackageDeliveryIcon = (
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
      d="M7 14V7c0-1.6569-1.3431-3-3-3m3 10c-1.6569 0-3 1.3431-3 3s1.3431 3 3 3 3-1.3431 3-3m-3-3c1.6569 0 3 1.3431 3 3m0 0h10m-4.5-9V5m0 0H14c-1.6569 0-3 1.3431-3 3v2c0 1.6569 1.3431 3 3 3h3c1.6569 0 3-1.3431 3-3V8c0-1.6569-1.3431-3-3-3z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(PackageDeliveryIcon);
export default ForwardRef;
