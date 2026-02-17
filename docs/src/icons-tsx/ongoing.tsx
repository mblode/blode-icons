import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const OngoingIcon = (
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
      d="M12 21c-4.9706 0-9-4.0294-9-9s4.0294-9 9-9m4.5 1.204A9.04 9.04 0 0 1 18.7083 6M16.5 19.796A9.04 9.04 0 0 0 18.7083 18m2.1215-7.7509A9.04 9.04 0 0 1 21 12a9.04 9.04 0 0 1-.1702 1.7508M13 9l3 3-3 3"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      style={{
        stroke: "currentColor",
        strokeOpacity: 1,
      }}
    />
    <path
      d="M15 12H8"
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
const ForwardRef = forwardRef(OngoingIcon);
export default ForwardRef;
