import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ImageAltTextIcon = (
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
      d="M4 14h10m6 0h-6m-7 3h5m3 0h2M4 12l1.8787-1.8787c1.1715-1.1715 3.071-1.1715 4.2426 0L14 14M4 12v5c0 1.6569 1.3431 3 3 3h10c1.6569 0 3-1.3431 3-3V7c0-1.6569-1.3431-3-3-3H7C5.3431 4 4 5.3431 4 7zm13-3.5c0 .8284-.6716 1.5-1.5 1.5S14 9.3284 14 8.5 14.6716 7 15.5 7s1.5.6716 1.5 1.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(ImageAltTextIcon);
export default ForwardRef;
