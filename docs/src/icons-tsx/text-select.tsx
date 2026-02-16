import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const TextSelectIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v9c0 1.6569 1.3431 3 3 3h6M20 17V8c0-1.6569-1.3431-3-3-3h-6" style={{
    stroke: "currentColor",
    strokeOpacity: 1
  }} /><circle cx={4} cy={5} r={2} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} style={{
    stroke: "currentColor",
    strokeOpacity: 1
  }} /><circle cx={20} cy={19} r={2} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} style={{
    stroke: "currentColor",
    strokeOpacity: 1
  }} /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 10h6M9 14h4" style={{
    stroke: "currentColor",
    strokeOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(TextSelectIcon);
export default ForwardRef;
