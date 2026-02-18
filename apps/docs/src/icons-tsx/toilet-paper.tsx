import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ToiletPaperIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinejoin="round" strokeWidth={2} d="M7 4h10c1.6569 0 3 2.6863 3 6v7c0 1.6569-1.3431 3-3 3h-4c-1.6569 0-3-1.3431-3-3v-1M7 4c1.6569 0 3 2.6863 3 6M7 4c-1.6569 0-3 2.6863-3 6s1.3431 6 3 6m3-6v6m0-6c0 3.3137-1.3431 6-3 6m3 0H7" /><path fill="currentColor" d="M7.75 10c0 .6904-.3358 1.25-.75 1.25s-.75-.5596-.75-1.25.3358-1.25.75-1.25.75.5596.75 1.25" /></svg>;
const ForwardRef = forwardRef(ToiletPaperIcon);
export default createLucideIcon('ToiletPaperIcon', ForwardRef);
