import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ClapperboardIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 10v6c0 1.6569 1.3431 3 3 3h12c1.6569 0 3-1.3431 3-3v-6M3 10V8c0-1.6569 1.3431-3 3-3h12c1.6569 0 3 1.3431 3 3v2M7.9 5.5l-.8 4m5.3-4-.8 4m5.3-4-.8 4" /></svg>;
const ForwardRef = forwardRef(ClapperboardIcon);
export default createLucideIcon('ClapperboardIcon', ForwardRef);
