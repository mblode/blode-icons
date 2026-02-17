import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const PieChart1Icon = (
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
      d="M12 3c-4.9706 0-9 4.0294-9 9s4.0294 9 9 9c3.9187 0 7.2524-2.5044 8.4879-6M12 3c4.9706 0 9 4.0294 9 9 0 1.0519-.1805 2.0617-.5121 3M12 3v9l8.4879 3"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={2}
      style={{
        stroke: "currentColor",
        strokeOpacity: 1,
      }}
    />
    <path
      d="M12 3c-4.9706 0-9 4.0294-9 9s4.0294 9 9 9c3.9187 0 7.2524-2.5044 8.4879-6M12 3c4.9706 0 9 4.0294 9 9 0 1.0519-.1805 2.0617-.5121 3M12 3v9l8.4879 3"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={2}
      style={{
        stroke: "currentColor",
        strokeOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(PieChart1Icon);
export default ForwardRef;
