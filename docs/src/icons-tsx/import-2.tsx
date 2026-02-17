import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Import2Icon = (
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
      d="M21 9v7c0 1.6569-1.3431 3-3 3H6c-1.6569 0-3-1.3431-3-3V8c0-1.6569 1.3431-3 3-3h2"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      style={{
        stroke: "currentColor",
        strokeOpacity: 1,
      }}
    />
    <path
      d="M21 5h-4c-2.7614 0-5 2.2386-5 5v5m0 0-3.75-3.75M12 15l3.75-3.75"
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
const ForwardRef = forwardRef(Import2Icon);
export default ForwardRef;
