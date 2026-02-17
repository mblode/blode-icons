import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const LayoutGrid2Icon = (
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
      d="M4 8.8c0-1.6802 0-2.5202.327-3.162a3 3 0 0 1 1.311-1.311C6.2798 4 7.1198 4 8.8 4H10v6H4zM14 4h1.2c1.6802 0 2.5202 0 3.162.327a3 3 0 0 1 1.311 1.311C20 6.2798 20 7.1198 20 8.8V10h-6zM4 14h6v6H8.8c-1.6802 0-2.5202 0-3.162-.327a3 3 0 0 1-1.311-1.311C4 17.7202 4 16.8802 4 15.2zM14 14h6v1.2c0 1.6802 0 2.5202-.327 3.162a3 3 0 0 1-1.311 1.311C17.7202 20 16.8802 20 15.2 20H14z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(LayoutGrid2Icon);
export default ForwardRef;
