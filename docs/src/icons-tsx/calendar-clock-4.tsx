import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CalendarClock4Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.5 20H7c-1.6569 0-3-1.3431-3-3V8c0-1.6569 1.3431-3 3-3h10c1.6569 0 3 1.3431 3 3v.5M8 5V3m8 2V3m1 12.0002v1.9997l1.5 1.5003m-3.4127-6.1184c2.5509-1.0566 5.4742.155 6.5309 2.7058 1.0566 2.5507-.155 5.4739-2.7059 6.5306-2.5508 1.0566-5.4741-.155-6.5308-2.7058-1.0558-2.5499.155-5.4739 2.7058-6.5306" /></svg>;
const ForwardRef = forwardRef(CalendarClock4Icon);
export default createLucideIcon('CalendarClock4Icon', ForwardRef);
