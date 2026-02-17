import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ChromecastIcon = (
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
      d="M3 14c3.3137 0 6 2.6863 6 6M3 10c5.5229 0 10 4.4772 10 10m4 0h1c1.6569 0 3-1.3431 3-3V7c0-1.6569-1.3431-3-3-3H5c-1.1046 0-2 .8954-2 2m0 12c1.1046 0 2 .8954 2 2"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(ChromecastIcon);
export default ForwardRef;
