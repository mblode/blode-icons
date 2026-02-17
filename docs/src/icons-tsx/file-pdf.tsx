import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const FilePdfIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 11V7c0-1.6569 1.3431-3 3-3h6.1716a2 2 0 0 1 1.4142.5858l2.8284 2.8284A2 2 0 0 1 19 8.8284V11m-5-6v2c0 1.1046.8954 2 2 2h2M4 20v-5h1.75c.8284 0 1.5.6716 1.5 1.5S6.5784 18 5.75 18H4.5M10 15v5h1.25c1.0833 0 2.75-.5 2.75-2.5S12.3333 15 11.25 15zM20 15h-3v5M17 18h2" style={{
    stroke: "currentColor",
    strokeOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(FilePdfIcon);
export default createLucideIcon('FilePdfIcon', ForwardRef);
