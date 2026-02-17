import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const BubbleAnnotation4Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" strokeWidth={2} d="M20.002 7c0-1.6569-1.3432-3-3-3h-10c-1.6569 0-3 1.3431-3 3v14.5l3.7568-2.348c.1589-.0993.3425-.152.53-.152h8.7132c1.6568 0 3-1.3431 3-3z" /><path fill="currentColor" stroke="currentColor" strokeLinecap="square" strokeWidth={0.75} d="M7.125 11.5a.875.875 0 1 0 1.75 0 .875.875 0 0 0-1.75 0Zm4 0a.875.875 0 1 0 1.7501-.0001.875.875 0 0 0-1.7501.0001Zm4 0a.875.875 0 1 0 1.7501-.0001.875.875 0 0 0-1.7501.0001Z" style={{
    fill: "currentColor",
    fillOpacity: 1,
    stroke: "currentColor",
    strokeOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(BubbleAnnotation4Icon);
export default createLucideIcon('BubbleAnnotation4Icon', ForwardRef);
