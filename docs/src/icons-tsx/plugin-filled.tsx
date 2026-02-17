import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const PluginFilledIcon = (
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
      d="M10 3c0-.5523-.4477-1-1-1s-1 .4477-1 1v3c-2.2091 0-4 1.7909-4 4v3c0 3.3137 2.6863 6 6 6h1v2c0 .5523.4477 1 1 1s1-.4477 1-1v-2h1c3.3137 0 6-2.6863 6-6v-3c0-2.2091-1.7909-4-4-4V3c0-.5523-.4477-1-1-1s-1 .4477-1 1v3h-4z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(PluginFilledIcon);
export default ForwardRef;
