import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CupHotIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5V3M7 5V3m8 2V3M8 21h6c1.6569 0 3-1.3431 3-3V9c0-.5523-.4477-1-1-1H6c-.5523 0-1 .4477-1 1v9c0 1.6569 1.3431 3 3 3m9-11h1.5c1.3807 0 2.5 1.1193 2.5 2.5S19.8807 15 18.5 15H17z" /></svg>;
const ForwardRef = forwardRef(CupHotIcon);
export default createLucideIcon('CupHotIcon', ForwardRef);
