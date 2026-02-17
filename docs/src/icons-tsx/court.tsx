import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CourtIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 20h16M6 17V9m4 8V9m4 8V9m4 8V9M5.5 9h13c.8284 0 1.5-.6716 1.5-1.5v-.8972a1.5 1.5 0 0 0-1.0526-1.4317l-6.5-2.0313a1.5 1.5 0 0 0-.8948 0l-6.5 2.0313A1.5 1.5 0 0 0 4 6.6028V7.5C4 8.3284 4.6716 9 5.5 9" /></svg>;
const ForwardRef = forwardRef(CourtIcon);
export default createLucideIcon('CourtIcon', ForwardRef);
