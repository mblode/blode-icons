import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const FocusAutoIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V7c0-1.6569 1.3431-3 3-3h1M4 16v1c0 1.6569 1.3431 3 3 3h1m8-16h1c1.6569 0 3 1.3431 3 3v1m0 8v1c0 1.6569-1.3431 3-3 3h-1m-2.1818-6.75L12 9.25l-1.8182 4m3.6364 0 .6818 1.5m-.6818-1.5h-3.6364m0 0L9.5 14.75" /></svg>;
const ForwardRef = forwardRef(FocusAutoIcon);
export default ForwardRef;
