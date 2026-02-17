import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const VariablesFilledIcon = (
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
      d="M9.999 2.7498a4 4 0 0 1 4 0l5.0108 2.893a4 4 0 0 1 2 3.464v5.7859a4 4 0 0 1-2 3.4641l-5.0108 2.893a4 4 0 0 1-4 0l-5.0107-2.893a4 4 0 0 1-2-3.4641V9.1068a4 4 0 0 1 2-3.464zm-.5 9.25c0-1.3808 1.1193-2.5 2.5-2.5s2.5 1.1192 2.5 2.5-1.1193 2.5-2.5 2.5-2.5-1.1193-2.5-2.5"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(VariablesFilledIcon);
export default ForwardRef;
