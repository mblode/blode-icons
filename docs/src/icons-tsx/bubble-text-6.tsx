import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const BubbleText6Icon = (
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
      d="M15 10H9m3 4H9m-6 6h13c2.7614 0 5-2.2386 5-5V9c0-2.7614-2.2386-5-5-5H8C5.2386 4 3 6.2386 3 9z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(BubbleText6Icon);
export default ForwardRef;
