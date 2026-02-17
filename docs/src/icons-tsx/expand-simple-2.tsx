import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ExpandSimple2Icon = (
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
      d="M13 18h3c1.1046 0 2-.8954 2-2v-3M6 11V8c0-1.1046.8954-2 2-2h3"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(ExpandSimple2Icon);
export default ForwardRef;
