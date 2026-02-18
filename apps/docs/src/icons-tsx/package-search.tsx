import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const PackageSearchIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20H7c-1.6569 0-3-1.3431-3-3V7c0-1.6569 1.3431-3 3-3h10c1.6569 0 3 1.3431 3 3v3M9 4v4c0 .5523.4477 1 1 1h4c.5523 0 1-.4477 1-1V4m4.1213 15.1213c-1.1716 1.1716-3.071 1.1716-4.2426 0s-1.1716-3.0711 0-4.2427c1.1716-1.1715 3.071-1.1715 4.2426 0s1.1716 3.0711 0 4.2427m0 0L21 21" /></svg>;
const ForwardRef = forwardRef(PackageSearchIcon);
export default createLucideIcon('PackageSearchIcon', ForwardRef);
