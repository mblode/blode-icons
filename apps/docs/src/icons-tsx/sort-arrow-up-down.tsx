import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SortArrowUpDownIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7c0-1.6569 1.3431-3 3-3s3 1.3431 3 3-1.3431 3-3 3-3-1.3431-3-3M4 17c0-1.6569 1.3431-3 3-3s3 1.3431 3 3-1.3431 3-3 3-3-1.3431-3-3M15 7.25l3-3 3 3M18 4.5v15M21 16.75l-3 3-3-3" /></svg>;
const ForwardRef = forwardRef(SortArrowUpDownIcon);
export default createLucideIcon('SortArrowUpDownIcon', ForwardRef);
