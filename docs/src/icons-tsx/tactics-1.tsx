import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Tactics1Icon = (
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
      d="m4 6 2 2m0 0 2 2M6 8l2-2M6 8l-2 2m12 6 2 2m0 0 2 2m-2-2 2-2m-2 2-2 2M14 7l2-3 3 2m-2.75-.5c1.75 4.5-2.75 7-4.25 8m-3 4C9 18.8807 7.8807 20 6.5 20S4 18.8807 4 17.5 5.1193 15 6.5 15 9 16.1193 9 17.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      style={{
        stroke: "currentColor",
        strokeOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(Tactics1Icon);
export default ForwardRef;
