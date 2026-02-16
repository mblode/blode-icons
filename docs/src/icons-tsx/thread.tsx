import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ThreadIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 4v4.5M6 4H5m1 0h5M6 8.5v5m0-5 12 2m-12 3V20m0-6.5 12 2M6 20H5m1 0h5m7-9.5V4m0 6.5v5M18 4h1m-1 0h-5m5 11.5V20m0-4.5 3 .5m-3 4h1m-1 0h-5M11 4v-.5c0-.5523.4477-1 1-1s1 .4477 1 1V4m-2 0h2m-2 16v.5c0 .5523.4477 1 1 1v0c.5523 0 1-.4477 1-1V20m-2 0h2" /></svg>;
const ForwardRef = forwardRef(ThreadIcon);
export default ForwardRef;
