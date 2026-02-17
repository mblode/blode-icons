import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const BellIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M16 18c-.6733 1.7659-2.2109 3-4 3s-3.3268-1.2341-4-3m-.5735 0h9.1469c1.8144 0 3.2135-1.598 2.9737-3.3965l-.7541-5.6561C18.339 5.5427 15.4348 3 12 3S5.661 5.5427 5.207 8.9474l-.7542 5.6561C4.2131 16.402 5.6121 18 7.4265 18Z"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(BellIcon);
export default ForwardRef;
