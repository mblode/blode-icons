import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const PinIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="m4 20 4-4m-2.9709-2.9709 5.9418 5.9418c1.7985 1.7985 4.8787.6833 5.109-1.8497l.2741-3.0157a3 3 0 0 1 1.5654-2.3698l1.5305-.8241c1.7693-.9527 2.12-3.3417.699-4.7627L17.8511 3.851c-1.421-1.421-3.81-1.0703-4.7627.699l-.8241 1.5305A3 3 0 0 1 9.8945 7.646L6.8788 7.92c-2.533.2303-3.6482 3.3105-1.8497 5.109"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(PinIcon);
export default ForwardRef;
