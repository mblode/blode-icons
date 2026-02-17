import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SteakIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21.4283 10.5851c.7802 5.0496-4.9846 7.4007-8.6505 8.3998-4.166 1.1354-8.1842.7629-9.9099-4.9432-.5313-1.7569-.4856-3.7116.1269-5.4252 1.1487-3.214 3.9954-4.8432 6.6486-3.805L14 6.5c3.286 1.2859 5.9915-1.397 7.4283 4.0851" style={{
    stroke: "currentColor",
    strokeOpacity: 1
  }} /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.5 5.5c1.2928 6 .5261 9.1102-4 12.5" style={{
    stroke: "currentColor",
    strokeOpacity: 1
  }} /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 13.2572c2-.4572 5.5-.6857 8 2.7428" style={{
    stroke: "currentColor",
    strokeOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(SteakIcon);
export default createLucideIcon('SteakIcon', ForwardRef);
