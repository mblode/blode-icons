import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ArrowRoundedIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8v8c0 1.6569 1.3431 3 3 3h13M16.5 4.5 20 8m0 0-3.5 3.5M20 8h-7c-2.7614 0-5 2.2386-5 5v1" /></svg>;
const ForwardRef = forwardRef(ArrowRoundedIcon);
export default createLucideIcon('ArrowRoundedIcon', ForwardRef);
