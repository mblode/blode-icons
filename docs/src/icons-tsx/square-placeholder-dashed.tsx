import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const SquarePlaceholderDashedIcon = (
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
      d="M6.5 4C5.1193 4 4 5.1193 4 6.5v0M17.5 4C18.8807 4 20 5.1193 20 6.5v0m-16 11C4 18.8807 5.1193 20 6.5 20v0m11 0c1.3807 0 2.5-1.1193 2.5-2.5v0M10.5 4h3m6.5 6.5v3M13.5 20h-3M4 13.5v-3"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(SquarePlaceholderDashedIcon);
export default ForwardRef;
