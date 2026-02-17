import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Dice6Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M17 4H7C5.3431 4 4 5.3431 4 7v10c0 1.6569 1.3431 3 3 3h10c1.6569 0 3-1.3431 3-3V7c0-1.6569-1.3431-3-3-3"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <path
      d="M7.9 8h.2m-.2 4h.2m-.2 4h.2m7.8-8h.2m-.2 4h.2m-.2 4h.2M8.5 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 4a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 4a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m8-8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 4a.5.5 0 1 1-1.0001-.0001A.5.5 0 0 1 16.5 12m0 4a.5.5 0 1 1-1.0001-.0001A.5.5 0 0 1 16.5 16"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(Dice6Icon);
export default ForwardRef;
