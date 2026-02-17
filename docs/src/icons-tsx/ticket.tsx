import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const TicketIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 8.5v.01M15 12v.01m0 3.49v.01M6 5h12c1.6569 0 3 1.3431 3 3v1.25c-2.5 1-2.5 4.5 0 5.5V16c0 1.6569-1.3431 3-3 3H6c-1.6569 0-3-1.3431-3-3v-1.25c2.5-1 2.5-4.5 0-5.5V8c0-1.6569 1.3431-3 3-3" /></svg>;
const ForwardRef = forwardRef(TicketIcon);
export default createLucideIcon('TicketIcon', ForwardRef);
