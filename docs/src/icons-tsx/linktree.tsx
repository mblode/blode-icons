import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const LinktreeIcon = (
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
      d="M13.7363 5.8525 17.741 1.736l2.3248 2.3808-4.2006 4.0046h5.9085v3.3048h-5.9365l4.2286 4.1076-2.3248 2.3338-5.7405-5.7685L6.26 17.8675l-2.3248-2.3248 4.2286-4.1076H2.2263V8.1213h5.9085L3.9342 4.1167 6.259 1.7359l4.0046 4.1166V0h3.4727zm-3.4727 10.3061h3.4727V24h-3.4727z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(LinktreeIcon);
export default ForwardRef;
