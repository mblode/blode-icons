import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const BathMan1Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><circle cx={12} cy={4} r={2} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} style={{
    stroke: "currentColor",
    strokeOpacity: 1
  }} /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 22v-6h1c.5523 0 1-.4477 1-1v-3c0-1.6569-1.3431-3-3-3h-4c-1.6569 0-3 1.3431-3 3v3c0 .5523.4477 1 1 1h1v6" style={{
    stroke: "currentColor",
    strokeOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(BathMan1Icon);
export default ForwardRef;
