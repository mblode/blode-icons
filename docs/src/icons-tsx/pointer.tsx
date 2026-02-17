import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const PointerIcon = (
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
      d="M12 9h5c1.6569 0 3 1.3431 3 3v1.8292C20 17.7895 16.7895 21 12.8292 21a7.171 7.171 0 0 1-6.3455-3.831L3.5 11.5l.7506-.9383c.69-.8625 1.9486-1.0023 2.8111-.3123L8 11V5c0-1.1046.8954-2 2-2s2 .8954 2 2z"
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(PointerIcon);
export default ForwardRef;
