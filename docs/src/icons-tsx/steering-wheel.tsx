import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const SteeringWheelIcon = (
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
    <circle
      cx={12}
      cy={12}
      r={8}
      stroke="currentColor"
      strokeWidth={2}
      style={{
        stroke: "currentColor",
        strokeOpacity: 1,
      }}
    />
    <path
      d="M12 2v20M2 12h20M4.9297 4.9287l14.1421 14.1421M19.0703 4.9287 4.9282 19.0708"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.8}
      style={{
        stroke: "currentColor",
        strokeOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(SteeringWheelIcon);
export default ForwardRef;
