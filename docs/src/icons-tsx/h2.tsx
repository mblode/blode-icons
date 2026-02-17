import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const H2Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M13 5v7m0 0v7m0-7H3m0-7v7m0 0v7m19 0h-4l3.4948-4.4317A2 2 0 0 0 22 13.2396V13c0-1.1046-.8954-2-2-2-.7403 0-1.3866.4022-1.7324 1"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(H2Icon);
export default ForwardRef;
