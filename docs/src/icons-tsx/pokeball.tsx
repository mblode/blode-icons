import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const PokeballIcon = (
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
      d="M21 12c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9m18 0c0-4.9706-4.0294-9-9-9s-9 4.0294-9 9m18 0h-6M3 12h6m6 0c0 1.6569-1.3431 3-3 3s-3-1.3431-3-3m6 0c0-1.6569-1.3431-3-3-3s-3 1.3431-3 3"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(PokeballIcon);
export default ForwardRef;
