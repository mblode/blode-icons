import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CaptureIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 20H7c-1.6569 0-3-1.3431-3-3v-1m12 4h1c1.6569 0 3-1.3431 3-3v-1M4 8V7c0-1.6569 1.3431-3 3-3h1m8 0h1c1.6569 0 3 1.3431 3 3v1M8 13v-2.3431C8 9.7418 8.7418 9 9.6569 9a.828.828 0 0 0 .5857-.2426l.1716-.1716A2 2 0 0 1 11.8284 8h.3432a2 2 0 0 1 1.4142.5858l.1716.1716A.828.828 0 0 0 14.3431 9C15.2582 9 16 9.7418 16 10.6569V13c0 1.1046-.8954 2-2 2h-4c-1.1046 0-2-.8954-2-2" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11.85v-.01m.5.01a.5.5 0 1 1-1.0001-.0001.5.5 0 0 1 1.0001.0001" /></svg>;
const ForwardRef = forwardRef(CaptureIcon);
export default createLucideIcon('CaptureIcon', ForwardRef);
