import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const AnthropicFilledIcon = (
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
      d="M17.0977 4h-3.5366l6.333 16h3.4543zM6.8992 4 .6484 20H4.185l1.3982-3.3641h6.5797l1.316 3.282h3.5366L10.6003 4H6.8992m-.329 9.6821 2.1384-5.6616 2.2206 5.6616h-4.359"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(AnthropicFilledIcon);
export default ForwardRef;
