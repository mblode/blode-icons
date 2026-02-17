import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const CodeIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="m10 9.5-1.7929 1.7929c-.3905.3905-.3905 1.0237 0 1.4142L10 14.5m4-5 1.7929 1.7929c.3905.3905.3905 1.0237 0 1.4142L14 14.5M7 20h10c1.6569 0 3-1.3431 3-3V7c0-1.6569-1.3431-3-3-3H7C5.3431 4 4 5.3431 4 7v10c0 1.6569 1.3431 3 3 3"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(CodeIcon);
export default ForwardRef;
