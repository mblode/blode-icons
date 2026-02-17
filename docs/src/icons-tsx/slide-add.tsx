import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SlideAddIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 7V6c0-1.6569-1.3431-3-3-3H6C4.3431 3 3 4.3431 3 6v8c0 1.6569 1.3431 3 3 3h1m7-6v3m0 0v3m0-3h-3m3 0h3m1 7h-8c-1.6569 0-3-1.3431-3-3v-8c0-1.6569 1.3431-3 3-3h8c1.6569 0 3 1.3431 3 3v8c0 1.6569-1.3431 3-3 3" /></svg>;
const ForwardRef = forwardRef(SlideAddIcon);
export default ForwardRef;
