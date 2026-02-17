import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Car2Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinejoin="round" strokeWidth={2} d="M18.5 17H20c1.1046 0 2-.8954 2-2v-2.5406c0-1.43-1.0094-2.6613-2.4117-2.9417l-1.4644-.293a3 3 0 0 1-1.8116-1.1417L14.9 6.2A3 3 0 0 0 12.5 5H8.2426a3 3 0 0 0-2.1213.8787L2.8787 9.1213A3 3 0 0 0 2 11.2426V14.5C2 15.8807 3.1193 17 4.5 17" /><circle cx={7} cy={16.75} r={2.25} stroke="currentColor" strokeLinejoin="round" strokeWidth={2} /><circle cx={17} cy={16.75} r={2.25} stroke="currentColor" strokeLinejoin="round" strokeWidth={2} /><path stroke="currentColor" strokeWidth={2} d="M14.5 17h-5" /></svg>;
const ForwardRef = forwardRef(Car2Icon);
export default createLucideIcon('Car2Icon', ForwardRef);
