import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const SquareBehindSquare6Icon = (
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
      d="M16 16c.93 0 1.395 0 1.7765-.1022a3 3 0 0 0 2.1213-2.1213C20 13.395 20 12.93 20 12V8.8c0-1.6802 0-2.5202-.327-3.162a3 3 0 0 0-1.311-1.311C17.7202 4 16.8802 4 15.2 4H12c-.93 0-1.395 0-1.7765.1022a3 3 0 0 0-2.1213 2.1213C8 6.605 8 7.07 8 8m8 4.8v2.4c0 1.6802 0 2.5202-.327 3.162a3 3 0 0 1-1.311 1.311C13.7202 20 12.8802 20 11.2 20H8.8c-1.6802 0-2.5202 0-3.162-.327a3 3 0 0 1-1.311-1.311C4 17.7202 4 16.8802 4 15.2v-2.4c0-1.6802 0-2.5202.327-3.162a3 3 0 0 1 1.311-1.311C6.2798 8 7.1198 8 8.8 8h2.4c1.6802 0 2.5202 0 3.162.327a3 3 0 0 1 1.311 1.311C16 10.2798 16 11.1198 16 12.8Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(SquareBehindSquare6Icon);
export default ForwardRef;
