import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Calender5Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 9v8c0 1.6569 1.3431 3 3 3h10c1.6569 0 3-1.3431 3-3V9M4 9V7c0-1.6569 1.3431-3 3-3h1M4 9h16m0 0V7c0-1.6569-1.3431-3-3-3h-1M8 4v1.5M8 4h8m0 0v1.5" /></svg>;
const ForwardRef = forwardRef(Calender5Icon);
export default ForwardRef;
