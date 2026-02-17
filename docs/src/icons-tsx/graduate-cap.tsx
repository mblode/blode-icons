import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const GraduateCapIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m23 9-11 5L1 9l11-5zm0 0v7M5 11v3.9538a3 3 0 0 0 1.5833 2.6444l4 2.1429a3 3 0 0 0 2.8334 0l4-2.1429A3 3 0 0 0 19 14.9538V11" /></svg>;
const ForwardRef = forwardRef(GraduateCapIcon);
export default createLucideIcon('GraduateCapIcon', ForwardRef);
