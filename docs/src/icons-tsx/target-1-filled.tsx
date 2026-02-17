import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Target1FilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M12 2C6.4772 2 2 6.4772 2 12s4.4772 10 10 10 10-4.4772 10-10S17.5228 2 12 2m0 4c.5523 0 1 .4477 1 1v2.5c0 .5523-.4477 1-1 1s-1-.4477-1-1V7c0-.5523.4477-1 1-1m2.5 5c-.5523 0-1 .4477-1 1s.4477 1 1 1H17c.5523 0 1-.4477 1-1s-.4477-1-1-1zM12 13.5c.5523 0 1 .4477 1 1V17c0 .5523-.4477 1-1 1s-1-.4477-1-1v-2.5c0-.5523.4477-1 1-1M7 11c-.5523 0-1 .4477-1 1s.4477 1 1 1h2.5c.5523 0 1-.4477 1-1s-.4477-1-1-1z" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(Target1FilledIcon);
export default createLucideIcon('Target1FilledIcon', ForwardRef);
