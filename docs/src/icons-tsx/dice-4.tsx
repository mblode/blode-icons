import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Dice4Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 4H7C5.3431 4 4 5.3431 4 7v10c0 1.6569 1.3431 3 3 3h10c1.6569 0 3-1.3431 3-3V7c0-1.6569-1.3431-3-3-3" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7.9 8h.2m-.2 8h.2m7.8-8h.2m-.2 8h.2M8.5 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m8-8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 8a.5.5 0 1 1-1.0001-.0001A.5.5 0 0 1 16.5 16" /></svg>;
const ForwardRef = forwardRef(Dice4Icon);
export default ForwardRef;
