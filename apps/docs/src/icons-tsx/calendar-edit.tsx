import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CalendarEditIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 20H7c-1.6569 0-3-1.3431-3-3V9m0 0V8c0-1.6569 1.3431-3 3-3h10c1.6569 0 3 1.3431 3 3v1M4 9h16m0 0v1M8 5V3m8 2V3m-1 18h.7574a3 3 0 0 0 2.1213-.8787L21 17c.5523-.5523.5523-1.4477 0-2s-1.4477-.5523-2 0l-3.1213 3.1213A3 3 0 0 0 15 20.2426z" /></svg>;
const ForwardRef = forwardRef(CalendarEditIcon);
export default createLucideIcon('CalendarEditIcon', ForwardRef);
