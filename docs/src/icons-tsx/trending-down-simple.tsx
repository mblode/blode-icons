import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const TrendingDownSimpleIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m22 17-8.5-8.5-5 5L2 7" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 17h6v-6" /></svg>;
const ForwardRef = forwardRef(TrendingDownSimpleIcon);
export default ForwardRef;
