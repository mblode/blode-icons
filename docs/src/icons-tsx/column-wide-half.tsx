import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ColumnWideHalfIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" strokeWidth={2} d="M3 12v4c0 1.6569 1.3431 3 3 3h12c1.6569 0 3-1.3431 3-3v-4M3 12V8c0-1.6569 1.3431-3 3-3h12c1.6569 0 3 1.3431 3 3v4M3 12h18" /></svg>;
const ForwardRef = forwardRef(ColumnWideHalfIcon);
export default createLucideIcon('ColumnWideHalfIcon', ForwardRef);
