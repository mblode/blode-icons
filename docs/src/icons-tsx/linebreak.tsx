import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const LinebreakIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 12h12.75c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5H13m-9 0h3M4 5h16m-5.5 11.5L12 19l2.5 2.5" /></svg>;
const ForwardRef = forwardRef(LinebreakIcon);
export default ForwardRef;
