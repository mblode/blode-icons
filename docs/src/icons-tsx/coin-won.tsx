import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const CoinWonIcon = (
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
      d="m8 8.75 2 7 2-7 2 7 2-7M7 12h1.5m7 0H17"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
    />
  </svg>
);
const ForwardRef = forwardRef(CoinWonIcon);
export default ForwardRef;
