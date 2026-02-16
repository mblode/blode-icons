import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const WarningSignIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m3 20 .75-3m0 0L6.4319 6.2724C6.7658 4.9369 7.9657 4 9.3423 4h5.3154c1.3766 0 2.5765.9369 2.9104 2.2724L20.25 17m-16.5 0h16.5m0 0 .75 3M9 4h4.7981c1.6264 0 2.8198 1.5285 2.4253 3.1063L13 20" /></svg>;
const ForwardRef = forwardRef(WarningSignIcon);
export default ForwardRef;
