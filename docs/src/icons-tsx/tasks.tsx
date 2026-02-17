import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const TasksIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M17 4H7C5.3431 4 4 5.3431 4 7v10c0 1.6569 1.3431 3 3 3h10c1.6569 0 3-1.3431 3-3V7c0-1.6569-1.3431-3-3-3M12 9.5h4M12 14.5h4"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      style={{
        stroke: "currentColor",
        strokeOpacity: 1,
      }}
    />
    <circle
      cx={8.25}
      cy={9.5}
      fill="currentColor"
      r={1.25}
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
    <circle
      cx={8.25}
      cy={14.5}
      fill="currentColor"
      r={1.25}
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(TasksIcon);
export default ForwardRef;
