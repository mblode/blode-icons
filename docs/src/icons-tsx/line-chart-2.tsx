import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const LineChart2Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5v14m-5.9956-8L3 19M21 8v11m-6.0022-5v5" /></svg>;
const ForwardRef = forwardRef(LineChart2Icon);
export default createLucideIcon('LineChart2Icon', ForwardRef);
