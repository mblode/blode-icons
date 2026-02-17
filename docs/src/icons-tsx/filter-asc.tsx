import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const FilterAscIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h5M4 12h7M4 18h14M18 13V7m3 1-3-3-3 3" /></svg>;
const ForwardRef = forwardRef(FilterAscIcon);
export default createLucideIcon('FilterAscIcon', ForwardRef);
