import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ScreenCaptureIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7c0-1.1046.8954-2 2-2v0m9 0h1M9 5h1m9 0c1.1046 0 2 .8954 2 2v0M10 19H9m-4 0c-1.1046 0-2-.8954-2-2v0m0-4v-2" /><circle cx={18.5} cy={15.5} r={1.5} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M18 15.5h1" /><circle cx={18.5} cy={15.5} r={4.5} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /></svg>;
const ForwardRef = forwardRef(ScreenCaptureIcon);
export default ForwardRef;
