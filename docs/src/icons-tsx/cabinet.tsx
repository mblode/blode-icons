import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const CabinetIcon = (
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
      d="M18 5H6C4.3431 5 3 6.3431 3 8s1.3431 3 3 3h12c1.6569 0 3-1.3431 3-3s-1.3431-3-3-3M12 5v6M5 11.5 4 19M19 11.5l1 7.5"
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
const ForwardRef = forwardRef(CabinetIcon);
export default ForwardRef;
