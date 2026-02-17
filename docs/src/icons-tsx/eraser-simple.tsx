import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const EraserSimpleIcon = (
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
      d="m7 11 6 6M11.8782 5.1214l-6.7573 6.7573c-1.1716 1.1716-1.1716 3.0711 0 4.2427l2.7573 2.7573c1.1716 1.1716 3.0711 1.1716 4.2427 0l6.7573-6.7573c1.1716-1.1716 1.1716-3.0711 0-4.2427l-2.7573-2.7574c-1.1716-1.1715-3.0711-1.1715-4.2427 0"
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
const ForwardRef = forwardRef(EraserSimpleIcon);
export default ForwardRef;
