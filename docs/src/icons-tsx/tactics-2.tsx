import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Tactics2Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><circle cx={6} cy={18} r={2} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m4.25 4.25 3.5 3.5m0-3.5-3.5 3.5M16.25 16.25l3.5 3.5m0-3.5-3.5 3.5M8 18h1c1.6569 0 3-1.3431 3-3V9c0-1.6569 1.3431-3 3-3h4" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m18 4 2 2-2 2" /></svg>;
const ForwardRef = forwardRef(Tactics2Icon);
export default createLucideIcon('Tactics2Icon', ForwardRef);
