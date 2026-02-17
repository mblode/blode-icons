import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const LineThicknessIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M4.75 5.75h14.5" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={3.5} d="M5.75 17.25h12.5" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={2.5} d="M5.25 11h13.5" /></svg>;
const ForwardRef = forwardRef(LineThicknessIcon);
export default createLucideIcon('LineThicknessIcon', ForwardRef);
