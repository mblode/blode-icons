import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const VideoTimelineIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 5H6C4.3431 5 3 6.3431 3 8v4c0 1.6569 1.3431 3 3 3h12c1.6569 0 3-1.3431 3-3V8c0-1.6569-1.3431-3-3-3M3 19h18" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m3 12.4999 2.632-2.0472c1.0954-.852 2.6323-.8414 3.716.0255L15 14.9999M16.5 9.5h.01m.49 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" /><circle cx={7} cy={19} r={1} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /></svg>;
const ForwardRef = forwardRef(VideoTimelineIcon);
export default createLucideIcon('VideoTimelineIcon', ForwardRef);
