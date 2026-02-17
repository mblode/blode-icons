import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ConstructionHelmetFilledIcon = (
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
      d="M3 12.5c0-3.5337 2.0366-6.5917 5-8.0645V14H3zM3 16h18H3m13-2h5v-1.5c0-3.5337-2.0366-6.5917-5-8.0645z"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
    <rect
      fill="currentColor"
      height={4}
      rx={1.5}
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
      width={20}
      x={2}
      y={16}
    />
    <path
      d="M10 4c0-.5523.4477-1 1-1h2c.5523 0 1 .4477 1 1v10h-4z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(ConstructionHelmetFilledIcon);
export default ForwardRef;
