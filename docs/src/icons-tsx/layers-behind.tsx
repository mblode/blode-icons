import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const LayersBehindIcon = (
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
      d="M5 4h14m2 7v5c0 1.6569-1.3431 3-3 3H6c-1.6569 0-3-1.3431-3-3v-5c0-1.6569 1.3431-3 3-3h12c1.6569 0 3 1.3431 3 3"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(LayersBehindIcon);
export default ForwardRef;
