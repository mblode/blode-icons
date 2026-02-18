import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Downsize2Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 10h3c1.6569 0 3-1.3431 3-3V4M20 10h-3c-1.6569 0-3-1.3431-3-3V4M14 20v-3c0-1.6569 1.3431-3 3-3h3M4 14h3c1.6569 0 3 1.3431 3 3v3" /></svg>;
const ForwardRef = forwardRef(Downsize2Icon);
export default createLucideIcon('Downsize2Icon', ForwardRef);
