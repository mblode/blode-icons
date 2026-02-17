import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const LeaderboardFilledIcon = (
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
      d="M11 6C9.6193 6 8.5 7.1193 8.5 8.5V18h7V8.5C15.5 7.1193 14.3807 6 13 6zM3.5 8.5c-1.6568 0-3 1.3431-3 3V16c0 1.1046.8954 2 2 2H7V8.5zM17 10v8h4.5c1.1046 0 2-.8954 2-2v-3c0-1.6569-1.3431-3-3-3z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(LeaderboardFilledIcon);
export default ForwardRef;
