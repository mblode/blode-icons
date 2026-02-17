import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const KanbanViewIcon = (
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
      d="M10 7c0-1.1046.8954-2 2-2s2 .8954 2 2v10c0 1.1046-.8954 2-2 2s-2-.8954-2-2zM3 7c0-1.1046.8954-2 2-2s2 .8954 2 2v6c0 1.1046-.8954 2-2 2s-2-.8954-2-2zM17 7c0-1.1046.8954-2 2-2s2 .8954 2 2v4c0 1.1046-.8954 2-2 2s-2-.8954-2-2z"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(KanbanViewIcon);
export default ForwardRef;
