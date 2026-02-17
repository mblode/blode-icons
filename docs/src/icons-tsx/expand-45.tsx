import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Expand45Icon = (
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
      d="M14 4h6v6m-6 0 5.25-5.25M10 14l-5.25 5.25M4 14v6h6"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(Expand45Icon);
export default ForwardRef;
