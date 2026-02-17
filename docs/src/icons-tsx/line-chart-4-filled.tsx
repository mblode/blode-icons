import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const LineChart4FilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M3 4c.5523 0 1 .4477 1 1v14c0 .5523-.4477 1-1 1s-1-.4477-1-1V5c0-.5523.4477-1 1-1m6 4c.5523 0 1 .4477 1 1v10c0 .5523-.4477 1-1 1s-1-.4477-1-1V9c0-.5523.4477-1 1-1m6 4c.5523 0 1 .4477 1 1v6c0 .5523-.4477 1-1 1s-1-.4477-1-1v-6c0-.5523.4477-1 1-1m6 4c.5523 0 1 .4477 1 1v2c0 .5523-.4477 1-1 1s-1-.4477-1-1v-2c0-.5523.4477-1 1-1" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(LineChart4FilledIcon);
export default createLucideIcon('LineChart4FilledIcon', ForwardRef);
