import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SquareArrowOutTopLeftIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 7h4c1.6569 0 3 1.3431 3 3v8c0 1.6569-1.3431 3-3 3h-8c-1.6569 0-3-1.3431-3-3v-4M5 5l5.25 5.25M4 10V5c0-.5523.4477-1 1-1h5" /></svg>;
const ForwardRef = forwardRef(SquareArrowOutTopLeftIcon);
export default ForwardRef;
