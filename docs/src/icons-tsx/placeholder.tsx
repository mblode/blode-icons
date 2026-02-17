import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const PlaceholderIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 13.5v-3M10.5 4h3m6.5 6.5v3M13.5 20h-3M18 4.1707A3.009 3.009 0 0 1 19.8293 6m0 12A3.009 3.009 0 0 1 18 19.8293m-12 0A3.009 3.009 0 0 1 4.1707 18M6 4.1707A3.008 3.008 0 0 0 4.1707 6" /></svg>;
const ForwardRef = forwardRef(PlaceholderIcon);
export default createLucideIcon('PlaceholderIcon', ForwardRef);
