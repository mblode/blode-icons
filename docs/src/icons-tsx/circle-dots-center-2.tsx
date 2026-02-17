import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const CircleDotsCenter2Icon = (
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
      d="M12 21c-4.9706 0-9-4.0294-9-9s4.0294-9 9-9 9 4.0294 9 9-4.0294 9-9 9Z"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M11.125 8a.875.875 0 1 0 1.75 0 .875.875 0 0 0-1.75 0ZM11.125 12a.875.875 0 1 0 1.7501-.0001A.875.875 0 0 0 11.125 12ZM11.125 16a.875.875 0 1 0 1.7501-.0001A.875.875 0 0 0 11.125 16Z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth={0.75}
      style={{
        fill: "currentColor",
        fillOpacity: 1,
        stroke: "currentColor",
        strokeOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(CircleDotsCenter2Icon);
export default ForwardRef;
