import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const HomeRoundDoorFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M14.3345 3.6965c-1.3949-1.0026-3.2741-1.0026-4.669 0l-5 3.5938A4 4 0 0 0 3 10.5383v6.4618c0 2.2091 1.7909 4 4 4h1.5c.5523 0 1-.4477 1-1v-3.5c0-1.3807 1.1193-2.5 2.5-2.5s2.5 1.1193 2.5 2.5v3.5c0 .5523.4477 1 1 1H17c2.2091 0 4-1.7909 4-4v-6.4618a4 4 0 0 0-1.6655-3.248z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(HomeRoundDoorFilledIcon);
export default createLucideIcon('HomeRoundDoorFilledIcon', ForwardRef);
