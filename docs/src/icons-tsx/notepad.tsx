import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const NotepadIcon = (
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
      d="M9 10h6m-6 4h4m-1-9.5v-2m4 2v-2m-8 2v-2m-.5 18h9c1.6569 0 3-1.3431 3-3v-11c0-1.6569-1.3431-3-3-3h-9c-1.6569 0-3 1.3431-3 3v11c0 1.6569 1.3431 3 3 3"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(NotepadIcon);
export default ForwardRef;
