import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ChevronLeftSmallIcon = (
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
      d="m13.3787 16-2.9394-2.9393c-.5857-.5858-.5857-1.5356 0-2.1214L13.3787 8"
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
const ForwardRef = forwardRef(ChevronLeftSmallIcon);
export default ForwardRef;
