import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const PackageSecurityIcon = (
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
      d="M11 20H7c-1.6569 0-3-1.3431-3-3V7c0-1.6569 1.3431-3 3-3h10c1.6569 0 3 1.3431 3 3v3M9 4v4c0 .5523.4477 1 1 1h4c.5523 0 1-.4477 1-1V4m0 11v2.7171c0 1.8977 1.5178 2.6242 3 3.2829 1.4822-.6587 3-1.3852 3-3.2829V15c-2.0769-1.1767-3.9231-1.1767-6 0"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(PackageSecurityIcon);
export default ForwardRef;
