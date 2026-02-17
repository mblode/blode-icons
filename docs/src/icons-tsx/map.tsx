import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const MapIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M9 4.75v12.5m6-11v12.5M3 16.4752V7.6915a2 2 0 0 1 1.3675-1.8973l4-1.3334a2 2 0 0 1 1.265 0l4.735 1.5784a2 2 0 0 0 1.265 0l2.735-.9117C19.6626 4.6958 21 5.6598 21 7.025v8.7836a2 2 0 0 1-1.3675 1.8974l-4 1.3333a2 2 0 0 1-1.265 0l-4.735-1.5784a2 2 0 0 0-1.265 0l-2.735.9117C4.3374 18.8042 3 17.8403 3 16.4752"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(MapIcon);
export default ForwardRef;
