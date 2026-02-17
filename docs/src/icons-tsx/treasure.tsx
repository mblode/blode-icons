import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const TreasureIcon = (
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
      d="M17 5H7C4.7909 5 3 6.7909 3 9v8c0 1.1046.8954 2 2 2h14c1.1046 0 2-.8954 2-2V9c0-2.2091-1.7909-4-4-4M3 11h18M8 5v14M16 5v14M12 10v2"
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
const ForwardRef = forwardRef(TreasureIcon);
export default ForwardRef;
