import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const CoinPesosIcon = (
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
      d="M8 10.5h8"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
    />
    <path
      d="M21 12c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9Z"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M10 13.5h1.5c1.6569 0 3-1.3431 3-3s-1.3431-3-3-3H10zm0 0v3"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
    />
  </svg>
);
const ForwardRef = forwardRef(CoinPesosIcon);
export default ForwardRef;
