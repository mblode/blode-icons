import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const VariablesIcon = (
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
      d="M10.501 3.6158a3 3 0 0 1 3 0l5.0107 2.893a3 3 0 0 1 1.5 2.598v5.7859a3 3 0 0 1-1.5 2.5981l-5.0107 2.8929a3 3 0 0 1-3 0l-5.0108-2.8929a3 3 0 0 1-1.5-2.5981V9.1068a3 3 0 0 1 1.5-2.598z"
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
      d="M11.25 12h1.5m.75 0c0 .8284-.6716 1.5-1.5 1.5s-1.5-.6716-1.5-1.5.6716-1.5 1.5-1.5 1.5.6716 1.5 1.5"
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
const ForwardRef = forwardRef(VariablesIcon);
export default ForwardRef;
