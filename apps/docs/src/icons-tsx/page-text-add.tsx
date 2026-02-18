import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const PageTextAddIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 21H8c-1.6569 0-3-1.3431-3-3V6c0-1.6569 1.3431-3 3-3h8c1.6569 0 3 1.3431 3 3v5m-1 4v3m0 0v3m0-3h-3m3 0h3M9 7h6m-6 4h2" /></svg>;
const ForwardRef = forwardRef(PageTextAddIcon);
export default createLucideIcon('PageTextAddIcon', ForwardRef);
