import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const BarcodeIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 5H6C4.3431 5 3 6.3431 3 8v1m14-4h1c1.6569 0 3 1.3431 3 3v1m0 6v1c0 1.6569-1.3431 3-3 3h-1M7 19H6c-1.6569 0-3-1.3431-3-3v-1m5-5v4m8-4v4m-4-4v2" /></svg>;
const ForwardRef = forwardRef(BarcodeIcon);
export default createLucideIcon('BarcodeIcon', ForwardRef);
