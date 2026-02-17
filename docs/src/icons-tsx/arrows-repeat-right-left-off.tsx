import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ArrowsRepeatRightLeftOffIcon = (
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
      d="m17 3 3 3-3 3M7 21l-3-3 3-3m-2 3h13m2-3v-2M4 11V9c0-1.3062.8348-2.4175 2-2.8293M19 6h-8M3 3l18 18"
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
const ForwardRef = forwardRef(ArrowsRepeatRightLeftOffIcon);
export default ForwardRef;
