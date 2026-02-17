import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const DeskOfficeIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10v1M3 18V9c0-1.6569 1.3431-3 3-3h5m0 0h7c1.6569 0 3 1.3431 3 3v8c0 .5523-.4477 1-1 1h-8c-.5523 0-1-.4477-1-1z" style={{
    stroke: "currentColor",
    strokeOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(DeskOfficeIcon);
export default createLucideIcon('DeskOfficeIcon', ForwardRef);
