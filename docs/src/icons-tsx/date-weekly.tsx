import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const DateWeeklyIcon = (
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
      d="M5.4 12h.2m-.2 6.5h.2m12.8-13h.2m-.2 6.5h.2m-5.1-6.5c0 .8284-.6716 1.5-1.5 1.5s-1.5-.6716-1.5-1.5S11.1716 4 12 4s1.5.6716 1.5 1.5m0 6.5c0 .8284-.6716 1.5-1.5 1.5s-1.5-.6716-1.5-1.5.6716-1.5 1.5-1.5 1.5.6716 1.5 1.5m0 6.5c0 .8284-.6716 1.5-1.5 1.5s-1.5-.6716-1.5-1.5.6716-1.5 1.5-1.5 1.5.6716 1.5 1.5M6 12a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m13-13a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 6.5a.5.5 0 1 1-1.0001-.0001A.5.5 0 0 1 19 12"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(DateWeeklyIcon);
export default ForwardRef;
