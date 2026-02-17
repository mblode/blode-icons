import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const CoinRandIcon = (
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
      d="M21 12c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9Z"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M9.5 15.75v-7.5l5 7.5v-7.5M9.5 12H8M16 12h-1.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
    />
  </svg>
);
const ForwardRef = forwardRef(CoinRandIcon);
export default ForwardRef;
