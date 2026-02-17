import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SunsetFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M4 13c-.5523 0-1-.4477-1-1 0-4.9706 4.0294-9 9-9s9 4.0294 9 9c0 .5523-.4477 1-1 1zm-3 3c0-.5523.4477-1 1-1h20c.5523 0 1 .4477 1 1s-.4477 1-1 1H2c-.5523 0-1-.4477-1-1m5 4c0-.5523.4477-1 1-1h10c.5523 0 1 .4477 1 1s-.4477 1-1 1H7c-.5523 0-1-.4477-1-1" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(SunsetFilledIcon);
export default createLucideIcon('SunsetFilledIcon', ForwardRef);
