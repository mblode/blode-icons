import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const EarIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9.6058V9.5C19 5.9102 16.0899 3 12.5 3 8.9102 3 6 5.9101 6 9.5v7.7918C6 19.3398 7.6602 21 9.7082 21a3.708 3.708 0 0 0 3.3167-2.0498l.3945-.789a8 8 0 0 1 1.4986-2.0792l2.3891-2.3891A5.78 5.78 0 0 0 19 9.6059" style={{
    stroke: "currentColor",
    strokeOpacity: 1
  }} /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 9.5C15 8.1193 13.8807 7 12.5 7S10 8.1193 10 9.5c0 1.9826 1 3 0 5.5" style={{
    stroke: "currentColor",
    strokeOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(EarIcon);
export default createLucideIcon('EarIcon', ForwardRef);
