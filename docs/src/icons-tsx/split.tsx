import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const SplitIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M12 3v18M8 5H6C4.3431 5 3 6.3431 3 8v8c0 1.6569 1.3431 3 3 3h2m8 0h2c1.6569 0 3-1.3431 3-3V8c0-1.6569-1.3431-3-3-3h-2"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(SplitIcon);
export default ForwardRef;
