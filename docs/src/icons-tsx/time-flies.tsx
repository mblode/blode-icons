import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const TimeFliesIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><circle cx={15} cy={12} r={7} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 12h2m-1 4h2M3 8h2M15 9v3l1.5 1.5" /></svg>;
const ForwardRef = forwardRef(TimeFliesIcon);
export default ForwardRef;
