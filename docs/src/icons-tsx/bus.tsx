import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const BusIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20H5c-.5523 0-1-.4477-1-1V7c0-1.6569 1.3431-3 3-3h10c1.6569 0 3 1.3431 3 3v12c0 .5523-.4477 1-1 1h-2c-.5523 0-1-.4477-1-1v-1H8v1c0 .5523-.4477 1-1 1M4 12h16M7 15h1M16 15h1M2 8h2M20 8h2" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="M10 6.5h4" /></svg>;
const ForwardRef = forwardRef(BusIcon);
export default ForwardRef;
