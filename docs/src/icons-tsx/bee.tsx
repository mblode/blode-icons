import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const BeeIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.5 4.75 9 2.25M13.5 4.75l1.5-2.5M10 10.5V12c0 3.3137-2.6863 6-6 6-.5523 0-1-.4477-1-1v-1c0-3.3137 2.6863-6 6-6M14 10.5V12c0 3.3137 2.6863 6 6 6 .5523 0 1-.4477 1-1v-1c0-3.3137-2.6863-6-6-6M12 22v-1M15 8c0 1.6569-1.3431 3-3 3S9 9.6569 9 8s1.3431-3 3-3 3 1.3431 3 3" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.125 16.5c.444 2.5878 2.0101 4.5 3.874 4.5 1.8638 0 3.4299-1.9122 3.874-4.5" /></svg>;
const ForwardRef = forwardRef(BeeIcon);
export default ForwardRef;
