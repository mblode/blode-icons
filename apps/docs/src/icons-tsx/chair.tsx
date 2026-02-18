import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ChairIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><rect width={12} height={7} x={6} y={3} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} rx={3} /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14H5M18 18H6M8 10v4M6 14v7M16 10v4M18 14v7" /></svg>;
const ForwardRef = forwardRef(ChairIcon);
export default createLucideIcon('ChairIcon', ForwardRef);
