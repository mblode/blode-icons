import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const BooleanGroupIntersect3Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><rect width={12} height={12} x={9} y={3} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} rx={3} style={{
    stroke: "currentColor",
    strokeOpacity: 1
  }} /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9.1709a3.009 3.009 0 0 1 1.8293 1.8293M9 9H6c-1.6569 0-3 1.3431-3 3v6c0 1.6569 1.3431 3 3 3h6c1.6569 0 3-1.3431 3-3v-3" style={{
    stroke: "currentColor",
    strokeOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(BooleanGroupIntersect3Icon);
export default createLucideIcon('BooleanGroupIntersect3Icon', ForwardRef);
