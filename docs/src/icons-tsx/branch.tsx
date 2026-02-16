import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const BranchIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><circle cx={6.5} cy={6} r={2} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} style={{
    stroke: "currentColor",
    strokeOpacity: 1
  }} /><circle cx={6.5} cy={18} r={2} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} style={{
    stroke: "currentColor",
    strokeOpacity: 1
  }} /><circle cx={17.5} cy={6} r={2} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} style={{
    stroke: "currentColor",
    strokeOpacity: 1
  }} /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6.5 8v8M17.5 8v1c0 1.6569-1.3431 3-3 3h-5c-1.6569 0-3 1.3431-3 3v1" style={{
    stroke: "currentColor",
    strokeOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(BranchIcon);
export default ForwardRef;
