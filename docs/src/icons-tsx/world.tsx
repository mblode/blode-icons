import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const WorldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M19.7783 4.2218 4.222 19.7782M21 12c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9Zm-2.6356 6.364c-1.1716 1.1715-4.9705-.728-8.4853-4.2427C6.3644 10.6066 4.465 6.8076 5.6365 5.636c1.1716-1.1715 4.9706.728 8.4853 4.2427s5.4142 7.3137 4.2426 8.4853Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(WorldIcon);
export default ForwardRef;
