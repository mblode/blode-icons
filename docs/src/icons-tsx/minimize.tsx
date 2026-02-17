import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const MinimizeIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 10V7c0-1.6569 1.3431-3 3-3h11c1.6569 0 3 1.3431 3 3v5c0 1.6569-1.3431 3-3 3h-3m-1-4V8m0 3h3m-3 0 3-3M9 21H5c-1.1046 0-2-.8954-2-2v-3c0-1.1046.8954-2 2-2h4c1.1046 0 2 .8954 2 2v3c0 1.1046-.8954 2-2 2" /></svg>;
const ForwardRef = forwardRef(MinimizeIcon);
export default createLucideIcon('MinimizeIcon', ForwardRef);
