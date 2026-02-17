import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ForkSpoonIcon = (
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
      d="M4 4v5c0 1.6569 1.3431 3 3 3s3-1.3431 3-3V4M7 12v8M17 12.5V20M7 4v5M20.25 8c0 2.2782-1.4551 4-3.25 4s-3.25-1.7218-3.25-4S15.2051 3.75 17 3.75 20.25 5.7218 20.25 8"
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
const ForwardRef = forwardRef(ForkSpoonIcon);
export default ForwardRef;
