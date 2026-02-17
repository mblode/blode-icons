import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ExpandSimple2FilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M6 12c-.5523 0-1-.4477-1-1V8c0-1.6569 1.3431-3 3-3h3c.5523 0 1 .4477 1 1s-.4477 1-1 1H8c-.5523 0-1 .4477-1 1v3c0 .5523-.4477 1-1 1m6 6c0-.5523.4477-1 1-1h3c.5523 0 1-.4477 1-1v-3c0-.5523.4477-1 1-1s1 .4477 1 1v3c0 1.6569-1.3431 3-3 3h-3c-.5523 0-1-.4477-1-1" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(ExpandSimple2FilledIcon);
export default createLucideIcon('ExpandSimple2FilledIcon', ForwardRef);
