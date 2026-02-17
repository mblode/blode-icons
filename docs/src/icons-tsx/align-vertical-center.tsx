import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const AlignVerticalCenterIcon = (
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
      d="M20 15.2V8.8c0-1.6802 0-2.5202-.327-3.162a3 3 0 0 0-1.311-1.311C17.7202 4 16.8802 4 15.2 4H8.8c-1.6802 0-2.5202 0-3.162.327a3 3 0 0 0-1.311 1.311C4 6.2798 4 7.1198 4 8.8v6.4c0 1.6802 0 2.5202.327 3.162a3 3 0 0 0 1.311 1.311C6.2798 20 7.1198 20 8.8 20h6.4c1.6802 0 2.5202 0 3.162-.327a3 3 0 0 0 1.311-1.311C20 17.7202 20 16.8802 20 15.2"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <path
      d="M8 12h8"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(AlignVerticalCenterIcon);
export default ForwardRef;
