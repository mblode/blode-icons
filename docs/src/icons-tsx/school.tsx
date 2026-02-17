import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SchoolIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 19h1m19 0h-1m0 0v-7c0-1.6569-1.3431-3-3-3h-1m4 10h-4m0-10v10m0-10V8c0-1.6569-1.3431-3-3-3h-4C8.3431 5 7 6.3431 7 8v1m10 10h-3m-7 0V9m0 10H3m4 0h3M7 9H6c-1.6569 0-3 1.3431-3 3v7m7 0v-2c0-1.1046.8954-2 2-2v0c1.1046 0 2 .8954 2 2v2m-4 0h4" /></svg>;
const ForwardRef = forwardRef(SchoolIcon);
export default ForwardRef;
