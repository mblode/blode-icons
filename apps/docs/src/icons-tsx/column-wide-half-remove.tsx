import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ColumnWideHalfRemoveIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12v4c0 1.6569 1.3431 3 3 3h5m-8-7V8c0-1.6569 1.3431-3 3-3h12c1.6569 0 3 1.3431 3 3v4zm14 5 2 2m0 0 2 2m-2-2-2 2m2-2 2-2" /></svg>;
const ForwardRef = forwardRef(ColumnWideHalfRemoveIcon);
export default createLucideIcon('ColumnWideHalfRemoveIcon', ForwardRef);
