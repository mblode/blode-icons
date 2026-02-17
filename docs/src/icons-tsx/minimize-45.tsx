import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Minimize45Icon = (
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
      d="M14 4v6m0 0h6m-6 0 6.25-6.25M10 20v-6m0 0H4m6 0-6.25 6.25"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(Minimize45Icon);
export default ForwardRef;
