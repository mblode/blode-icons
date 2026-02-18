import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const PackageOutIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 9V7c0-1.6569 1.3431-3 3-3h10c1.6569 0 3 1.3431 3 3v10c0 1.6569-1.3431 3-3 3h-3" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 4v3c0 1.1046.8954 2 2 2h2c1.1046 0 2-.8954 2-2V4M9 20v-2c0-1.1046-.8954-2-2-2H3.5m1-2-2 2 2 2" /></svg>;
const ForwardRef = forwardRef(PackageOutIcon);
export default createLucideIcon('PackageOutIcon', ForwardRef);
