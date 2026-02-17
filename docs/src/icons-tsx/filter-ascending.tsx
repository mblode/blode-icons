import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const FilterAscendingIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16m0 0-3-3m3 3 3-3m5-7 .5-1.5m0 0 1.1924-3.9023a.8445.8445 0 0 1 1.6152 0L19.5 8.5m-4 0h4m0 0L20 10m-5 4h5l-5 6h5" /></svg>;
const ForwardRef = forwardRef(FilterAscendingIcon);
export default createLucideIcon('FilterAscendingIcon', ForwardRef);
