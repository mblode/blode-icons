import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Chart1Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m16 21.5-.8571-3M8 21.5l.8571-3M8 13v1m4-6v6m4-3v3m5-7v8c0 1.6569-1.3431 3-3 3H6c-1.6569 0-3-1.3431-3-3V7c0-1.6569 1.3431-3 3-3h12c1.6569 0 3 1.3431 3 3" /></svg>;
const ForwardRef = forwardRef(Chart1Icon);
export default ForwardRef;
