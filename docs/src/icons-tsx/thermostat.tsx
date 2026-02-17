import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ThermostatIcon = (
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
      d="M16 4h3m-3 4h3m-3 4h3M7 13.5351V5c0-1.1046.8954-2 2-2v0c1.1046 0 2 .8954 2 2v8.5351c1.1956.6916 2 1.9843 2 3.4649 0 2.2091-1.7909 4-4 4s-4-1.7909-4-4c0-1.4806.8044-2.7733 2-3.4649"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(ThermostatIcon);
export default ForwardRef;
