import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const PeaceIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      r={9}
      stroke="currentColor"
      strokeWidth={2}
      style={{
        stroke: "currentColor",
        strokeOpacity: 1,
      }}
    />
    <path
      d="M12 12v8.5M12 12l-6 6M12 12l6 6M12 3.5V12"
      stroke="currentColor"
      strokeWidth={2}
      style={{
        stroke: "currentColor",
        strokeOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(PeaceIcon);
export default ForwardRef;
