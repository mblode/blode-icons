import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ArrowsRepeatIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 13V8c0-1.6569 1.3431-3 3-3h8m-2-3 3 3-3 3m7 3v5c0 1.6569-1.3431 3-3 3H9m2 3-3-3 3-3" /></svg>;
const ForwardRef = forwardRef(ArrowsRepeatIcon);
export default createLucideIcon('ArrowsRepeatIcon', ForwardRef);
