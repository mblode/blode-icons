import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const MedicinePill2Icon = (
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
    <ellipse
      cx={11.5}
      cy={9}
      rx={9.5}
      ry={4}
      stroke="currentColor"
      strokeWidth={2}
      style={{
        stroke: "currentColor",
        strokeOpacity: 1,
      }}
    />
    <path
      d="M2 9v6c0 2.2091 4.2533 4 9.5 4s9.5-1.7909 9.5-4V9M6 6l12 6"
      stroke="currentColor"
      strokeWidth={2}
      style={{
        stroke: "currentColor",
        strokeOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(MedicinePill2Icon);
export default ForwardRef;
