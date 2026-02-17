import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const CircleIcon = (
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
      d="M12 21c-4.9706 0-9-4.0294-9-9s4.0294-9 9-9 9 4.0294 9 9c0 2.4853-2.0147 4.5-4.5 4.5S12 14.4853 12 12"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
      style={{
        stroke: "currentColor",
        strokeOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(CircleIcon);
export default ForwardRef;
