import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const VaultIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M7 18v2m0-2h10M7 18c-1.6569 0-3-1.3431-3-3V7c0-1.6569 1.3431-3 3-3h10c1.6569 0 3 1.3431 3 3v8c0 1.6569-1.3431 3-3 3m0 0v2m-9-9c0 2.2091 1.7909 4 4 4s4-1.7909 4-4-1.7909-4-4-4-4 1.7909-4 4m0 0h3"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(VaultIcon);
export default ForwardRef;
