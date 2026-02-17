import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ArrowsAllSidesIcon = (
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
      d="m9 4.7496.8787-.8787c1.1715-1.1716 3.071-1.1716 4.2426 0L15 4.7496m-10.25 4.25-.8787.8786c-1.1716 1.1716-1.1716 3.0711 0 4.2427l.8787.8786m14.5-6 .8787.8787c1.1715 1.1716 1.1715 3.0711 0 4.2427l-.8787.8786m-4.25 4.25-.8787.8787c-1.1716 1.1716-3.0711 1.1716-4.2426 0L9 19.2495"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(ArrowsAllSidesIcon);
export default ForwardRef;
