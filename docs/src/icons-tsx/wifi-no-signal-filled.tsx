import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const WifiNoSignalFilledIcon = (
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
      d="M15.5358 14.5353c-.3905.3906-1.0236.3906-1.4142 0l-2.1212-2.1212-2.1214 2.1213c-.3905.3906-1.0237.3906-1.4142 0-.3906-.3905-.3906-1.0236 0-1.4142l2.1213-2.1213-2.1213-2.1214c-.3906-.3905-.3906-1.0237 0-1.4142s1.0237-.3905 1.4142 0l2.1214 2.1213 2.1212-2.1212c.3905-.3906 1.0237-.3906 1.4142 0 .3906.3905.3906 1.0237 0 1.4142l-2.1212 2.1213 2.1212 2.1212c.3906.3906.3906 1.0237 0 1.4142M10.7508 18.7499c0 .6903.5596 1.25 1.25 1.25s1.25-.5597 1.25-1.25-.5597-1.25-1.25-1.25-1.25.5596-1.25 1.25"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(WifiNoSignalFilledIcon);
export default ForwardRef;
