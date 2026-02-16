import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const GamepadControlsRoundFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M12 2C9.929 2 8.25 3.679 8.25 5.75S9.929 9.5 12 9.5c2.0711 0 3.75-1.679 3.75-3.75S14.0711 2 12 2M5.75 8.25C3.679 8.25 2 9.929 2 12c0 2.0711 1.679 3.75 3.75 3.75S9.5 14.0711 9.5 12 7.821 8.25 5.75 8.25M18.25 8.25c-2.0711 0-3.75 1.679-3.75 3.75 0 2.0711 1.6789 3.75 3.75 3.75S22 14.0711 22 12s-1.6789-3.75-3.75-3.75M12 14.5c-2.071 0-3.75 1.6789-3.75 3.75S9.929 22 12 22c2.0711 0 3.75-1.6789 3.75-3.75S14.0711 14.5 12 14.5" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(GamepadControlsRoundFilledIcon);
export default ForwardRef;
