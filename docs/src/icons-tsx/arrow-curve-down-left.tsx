import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ArrowCurveDownLeftIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 20v-9.5C6 6.9102 8.9101 4 12.5 4S19 6.9101 19 10.5v.5c0 2.973-2.1623 5.441-5 5.917" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m3 17 3 3 3-3" /></svg>;
const ForwardRef = forwardRef(ArrowCurveDownLeftIcon);
export default createLucideIcon('ArrowCurveDownLeftIcon', ForwardRef);
