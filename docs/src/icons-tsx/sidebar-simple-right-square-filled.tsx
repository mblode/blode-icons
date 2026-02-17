import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const SidebarSimpleRightSquareFilledIcon = (
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
      d="M15 5v14H7c-1.1046 0-2-.8954-2-2V7c0-1.1046.8954-2 2-2zm6 2c0-2.2091-1.7909-4-4-4H7C4.7909 3 3 4.7909 3 7v10c0 2.2091 1.7909 4 4 4h10c2.2091 0 4-1.7909 4-4z"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(SidebarSimpleRightSquareFilledIcon);
export default ForwardRef;
