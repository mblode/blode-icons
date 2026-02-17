import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ConstructionHelmetIcon = (
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
      d="M4 14.9999v-2.5c0-3.7277 2.5496-6.8599 6-7.748M20 15v-2.5c0-3.7277-2.5495-6.8599-6-7.748M10 15V5c0-.5523.4477-1 1-1h2c.5523 0 1 .4477 1 1v10"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      style={{
        stroke: "currentColor",
        strokeOpacity: 1,
      }}
    />
    <rect
      height={4}
      rx={1}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      style={{
        stroke: "currentColor",
        strokeOpacity: 1,
      }}
      width={18}
      x={3}
      y={15}
    />
  </svg>
);
const ForwardRef = forwardRef(ConstructionHelmetIcon);
export default ForwardRef;
