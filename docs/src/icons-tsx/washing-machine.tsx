import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const WashingMachineIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><rect width={16} height={16} x={4} y={4} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} rx={3} style={{
    stroke: "currentColor",
    strokeOpacity: 1
  }} /><path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="M7.25 7.25h.01m.24 0a.25.25 0 1 1-.5 0 .25.25 0 0 1 .5 0Z" style={{
    stroke: "currentColor",
    strokeOpacity: 1
  }} /><circle cx={12} cy={13} r={4} stroke="currentColor" strokeWidth={2} style={{
    stroke: "currentColor",
    strokeOpacity: 1
  }} /><path stroke="currentColor" strokeLinecap="square" strokeWidth={2} d="M8.5 13c2.4547-2.1101 4.2606 2.3548 7 0" style={{
    stroke: "currentColor",
    strokeOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(WashingMachineIcon);
export default ForwardRef;
