import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const GamepadControlsRoundLeftFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M8.25 5.75C8.25 3.679 9.929 2 12 2c2.0711 0 3.75 1.679 3.75 3.75S14.0711 9.5 12 9.5 8.25 7.821 8.25 5.75M14.5 12c0-2.071 1.6789-3.75 3.75-3.75S22 9.929 22 12c0 2.0711-1.6789 3.75-3.75 3.75S14.5 14.0711 14.5 12M8.25 18.25c0-2.0711 1.679-3.75 3.75-3.75 2.0711 0 3.75 1.6789 3.75 3.75S14.0711 22 12 22s-3.75-1.6789-3.75-3.75" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /><path fill="currentColor" fillRule="evenodd" d="M5.75 8.25C7.821 8.25 9.5 9.929 9.5 12c0 2.0711-1.679 3.75-3.75 3.75S2 14.0711 2 12s1.679-3.75 3.75-3.75M7.5 12c0-.9665-.7835-1.75-1.75-1.75S4 11.0335 4 12s.7835 1.75 1.75 1.75S7.5 12.9665 7.5 12" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(GamepadControlsRoundLeftFilledIcon);
export default createLucideIcon('GamepadControlsRoundLeftFilledIcon', ForwardRef);
