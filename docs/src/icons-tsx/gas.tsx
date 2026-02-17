import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const GasIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M14 20h1m-1 0V10m0 10H4m10-10V7c0-1.6569-1.3431-3-3-3H7C5.3431 4 4 5.3431 4 7v13m10-10h1c1.6569 0 3 1.3431 3 3v2.5c0 .8284.6716 1.5 1.5 1.5s1.5-.6716 1.5-1.5V9.2426a3 3 0 0 0-.8787-2.1213L19 6M3 20h1m7-10H7"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(GasIcon);
export default ForwardRef;
