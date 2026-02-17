import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const PlaylistIcon = (
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
      d="M20.998 17.5c0 1.3807-1.3431 2.5-3 2.5s-3-1.1193-3-2.5 1.3432-2.5 3-2.5 3 1.1193 3 2.5m0 0V5M3 6h13M3 12h8m-8 6h6"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(PlaylistIcon);
export default ForwardRef;
