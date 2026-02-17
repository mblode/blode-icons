import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const DateMonthlyFilledIcon = (
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
      clipRule="evenodd"
      d="M9.5 5.5C9.5 4.1193 10.6193 3 12 3s2.5 1.1193 2.5 2.5S13.3807 8 12 8 9.5 6.8807 9.5 5.5"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
    <path
      d="M20 5.5c0 .8284-.6716 1.5-1.5 1.5S17 6.3284 17 5.5 17.6716 4 18.5 4s1.5.6716 1.5 1.5M20 12c0 .8284-.6716 1.5-1.5 1.5S17 12.8284 17 12s.6716-1.5 1.5-1.5 1.5.6716 1.5 1.5M7 12c0 .8284-.6716 1.5-1.5 1.5S4 12.8284 4 12s.6716-1.5 1.5-1.5S7 11.1716 7 12M7 18.5c0 .8284-.6716 1.5-1.5 1.5S4 19.3284 4 18.5 4.6716 17 5.5 17s1.5.6716 1.5 1.5M13.5 12c0 .8284-.6716 1.5-1.5 1.5s-1.5-.6716-1.5-1.5.6716-1.5 1.5-1.5 1.5.6716 1.5 1.5M13.5 18.5c0 .8284-.6716 1.5-1.5 1.5s-1.5-.6716-1.5-1.5.6716-1.5 1.5-1.5 1.5.6716 1.5 1.5"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(DateMonthlyFilledIcon);
export default ForwardRef;
