import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ArrowCornerLeftDownIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 4h-7c-1.6569 0-3 1.3431-3 3v12m4-3-4 4-4-4" /></svg>;
const ForwardRef = forwardRef(ArrowCornerLeftDownIcon);
export default createLucideIcon('ArrowCornerLeftDownIcon', ForwardRef);
