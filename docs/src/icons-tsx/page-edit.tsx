import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const PageEditIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 21.5H8c-1.6569 0-3-1.3431-3-3V6c0-1.6569 1.3431-3 3-3h8c1.6569 0 3 1.3431 3 3v5" style={{
    stroke: "currentColor",
    strokeOpacity: 1
  }} /><path stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" strokeWidth={2} d="M14 21.0002v-2.3334l3.5-3.5c.6443-.6443 1.689-.6443 2.3333 0 .6444.6444.6444 1.689 0 2.3334l-3.5 3.5z" style={{
    stroke: "currentColor",
    strokeOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(PageEditIcon);
export default createLucideIcon('PageEditIcon', ForwardRef);
