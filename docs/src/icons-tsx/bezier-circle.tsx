import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const BezierCircleIcon = (
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
      d="M9.5 5.4596C7.645 6.1691 6.1691 7.645 5.4596 9.5M14.5 5.4596c1.855.7095 3.3309 2.1854 4.0404 4.0404m-13.0808 5c.7095 1.855 2.1854 3.3309 4.0404 4.0404m5 0c1.855-.7095 3.3309-2.1854 4.0404-4.0404M4.5 14h1c.8284 0 1.5-.6716 1.5-1.5v-1c0-.8284-.6716-1.5-1.5-1.5h-1c-.8284 0-1.5.6716-1.5 1.5v1c0 .8284.6716 1.5 1.5 1.5ZM14 5.5v-1c0-.8284-.6716-1.5-1.5-1.5h-1c-.8284 0-1.5.6716-1.5 1.5v1c0 .8284.6716 1.5 1.5 1.5h1c.8284 0 1.5-.6716 1.5-1.5Zm3 7v-1c0-.8284.6716-1.5 1.5-1.5h1c.8285 0 1.5.6716 1.5 1.5v1c0 .8284-.6715 1.5-1.5 1.5h-1c-.8284 0-1.5-.6716-1.5-1.5Zm-3 7v-1c0-.8284-.6715-1.5-1.5-1.5h-1c-.8284 0-1.5.6716-1.5 1.5v1c0 .8284.6716 1.5 1.5 1.5h1c.8285 0 1.5-.6716 1.5-1.5Z"
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(BezierCircleIcon);
export default ForwardRef;
