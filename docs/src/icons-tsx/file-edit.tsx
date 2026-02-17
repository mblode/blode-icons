import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const FileEditIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8V6c0-1.6569 1.3431-3 3-3h3.7574a3 3 0 0 1 2.1213.8787l4.2426 4.2426A3 3 0 0 1 19 10.2426V18c0 1.6569-1.3431 3-3 3h-5" style={{
    stroke: "currentColor",
    strokeOpacity: 1
  }} /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 3.75V7c0 1.1046.8954 2 2 2h3" style={{
    stroke: "currentColor",
    strokeOpacity: 1
  }} /><path stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" strokeWidth={2} d="M5.5 21 4 19.5v-5.9412c0-.8284.6716-1.5 1.5-1.5s1.5.6716 1.5 1.5V19.5z" style={{
    stroke: "currentColor",
    strokeOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(FileEditIcon);
export default createLucideIcon('FileEditIcon', ForwardRef);
