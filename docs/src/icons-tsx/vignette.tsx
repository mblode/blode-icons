import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const VignetteIcon = (
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
      d="M21 12c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9Z"
      stroke="currentColor"
      strokeWidth={2}
      style={{
        stroke: "currentColor",
        strokeOpacity: 1,
      }}
    />
    <path
      d="M13 7.5c0 .5523-.4477 1-1 1s-1-.4477-1-1 .4477-1 1-1 1 .4477 1 1M17.5 12c0 .5523-.4477 1-1 1s-1-.4477-1-1 .4477-1 1-1 1 .4477 1 1M8.5 12c0 .5523-.4477 1-1 1s-1-.4477-1-1 .4477-1 1-1 1 .4477 1 1M13 16.5c0 .5523-.4477 1-1 1s-1-.4477-1-1 .4477-1 1-1 1 .4477 1 1M9.5251 8.111c.3905.3904.3905 1.0236 0 1.4141s-1.0237.3905-1.4142 0-.3905-1.0237 0-1.4142 1.0237-.3905 1.4142 0M15.8891 8.111c.3905.3904.3905 1.0236 0 1.4141s-1.0237.3905-1.4142 0c-.3906-.3905-.3906-1.0237 0-1.4142s1.0237-.3905 1.4142 0M9.5251 14.4749c.3905.3905.3905 1.0237 0 1.4142s-1.0237.3905-1.4142 0-.3905-1.0237 0-1.4142c.3905-.3906 1.0237-.3906 1.4142 0M15.8891 14.4749c.3905.3905.3905 1.0237 0 1.4142s-1.0237.3905-1.4142 0c-.3906-.3905-.3906-1.0237 0-1.4142.3905-.3906 1.0237-.3906 1.4142 0"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(VignetteIcon);
export default ForwardRef;
