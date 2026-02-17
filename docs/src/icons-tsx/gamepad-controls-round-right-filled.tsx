import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const GamepadControlsRoundRightFilledIcon = (
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
      d="M12 2C9.929 2 8.25 3.679 8.25 5.75S9.929 9.5 12 9.5c2.0711 0 3.75-1.679 3.75-3.75S14.0711 2 12 2M5.75 8.25C3.679 8.25 2 9.929 2 12c0 2.0711 1.679 3.75 3.75 3.75S9.5 14.0711 9.5 12 7.821 8.25 5.75 8.25M8.25 18.25c0-2.0711 1.679-3.75 3.75-3.75 2.0711 0 3.75 1.6789 3.75 3.75S14.0711 22 12 22s-3.75-1.6789-3.75-3.75"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
    <path
      clipRule="evenodd"
      d="M18.25 8.25c-2.0711 0-3.75 1.679-3.75 3.75 0 2.0711 1.6789 3.75 3.75 3.75S22 14.0711 22 12s-1.6789-3.75-3.75-3.75M16.5 12c0-.9665.7835-1.75 1.75-1.75S20 11.0335 20 12s-.7835 1.75-1.75 1.75-1.75-.7835-1.75-1.75"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(GamepadControlsRoundRightFilledIcon);
export default ForwardRef;
