import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const VisionProAppIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 9v4m18 4c1.6569 0 3-1.3431 3-3V8c0-1.6569-1.3431-3-3-3H7C5.3431 5 4 6.3431 4 8v6c0 1.6569 1.3431 3 3 3v0m12 .5c0 .8284-.6716 1.5-1.5 1.5h-9c-.8284 0-1.5-.6716-1.5-1.5v0c0-.8284.6716-1.5 1.5-1.5h9c.8284 0 1.5.6716 1.5 1.5" /></svg>;
const ForwardRef = forwardRef(VisionProAppIcon);
export default ForwardRef;
