import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ImagesCircleIcon = (
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
      d="m16 20-5.8787-5.8786c-1.1715-1.1716-3.071-1.1716-4.2426 0L4 16"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <path
      d="M14 11.5c1.1046 0 2-.8954 2-2s-.8954-2-2-2-2 .8954-2 2 .8954 2 2 2Z"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M12 21c4.9706 0 9-4.0294 9-9s-4.0294-9-9-9-9 4.0294-9 9 4.0294 9 9 9Z"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(ImagesCircleIcon);
export default ForwardRef;
