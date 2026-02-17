import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const LayoutGrid1Icon = (
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
      d="M4 8c0-.93 0-1.395.1022-1.7765a3 3 0 0 1 2.1213-2.1213C6.605 4 7.07 4 8 4h2v4zM14 20h2.129c.8097 0 1.2145 0 1.5491-.0777a3 3 0 0 0 2.2442-2.2442C20 17.3435 20 16.9387 20 16.129c0-.027 0-.0405-.0026-.0516a.1.1 0 0 0-.0748-.0748C19.9115 16 19.898 16 19.871 16H14zM4 12h6v8H8.8c-1.6802 0-2.5202 0-3.162-.327a3 3 0 0 1-1.311-1.311C4 17.7202 4 16.8802 4 15.2zM14 4h1.2c1.6802 0 2.5202 0 3.162.327a3 3 0 0 1 1.311 1.311C20 6.2798 20 7.1198 20 8.8V12h-6z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(LayoutGrid1Icon);
export default ForwardRef;
