import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ChipSimpleIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 4H7C5.3431 4 4 5.3431 4 7v10c0 1.6569 1.3431 3 3 3h10c1.6569 0 3-1.3431 3-3V7c0-1.6569-1.3431-3-3-3" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 9H9v6h6zM10 4V2M14 4V2M10 22v-2M14 22v-2M4 10H2M4 14H2M22 10h-2M22 14h-2" /></svg>;
const ForwardRef = forwardRef(ChipSimpleIcon);
export default ForwardRef;
