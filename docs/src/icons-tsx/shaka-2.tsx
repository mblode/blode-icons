import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Shaka2Icon = (
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
      d="M7.001 11.7 5.784 5.1475A1.404 1.404 0 0 0 4.404 4c-.8133 0-1.4563.6888-1.4005 1.5001l.613 8.9117C3.833 17.5583 6.4485 20 9.6025 20h1.8986a7 7 0 0 0 5.6-2.8l3.9-5.2-.261-.2609c-1.0112-1.0112-2.5955-1.1681-3.7854-.3749L16.001 12m-6-.5v-3c0-.8284-.6716-1.5-1.5-1.5s-1.5.6716-1.5 1.5v3c0 .8284.6715 1.5 1.5 1.5s1.5-.6716 1.5-1.5Zm0 0V9c0-.8284.6715-1.5 1.5-1.5s1.5.6716 1.5 1.5v2.5m-3 0c0 .8284.6715 1.5 1.5 1.5s1.5-.6716 1.5-1.5m0 0v-2c0-.8284.6715-1.5 1.5-1.5s1.5.6716 1.5 1.5v2c0 .8284-.6716 1.5-1.5 1.5s-1.5-.6716-1.5-1.5Z"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(Shaka2Icon);
export default ForwardRef;
