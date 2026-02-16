import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const AutoSizeIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinejoin="round" strokeWidth={2} d="M5 12h4c1.6569 0 3 1.3431 3 3v6m-7-9v6c0 1.6569 1.3431 3 3 3h4m-7-9V6c0-1.6569 1.3431-3 3-3h8c1.6569 0 3 1.3431 3 3v12c0 1.6569-1.3431 3-3 3h-4" /></svg>;
const ForwardRef = forwardRef(AutoSizeIcon);
export default ForwardRef;
