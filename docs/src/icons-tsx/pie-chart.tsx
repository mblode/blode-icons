import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const PieChartIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" ref={ref} {...props}><path d="M21.21 15.89A10 10 0 1 1 8 2.83" /><path d="M22 12A10 10 0 0 0 12 2v10z" /></svg>;
const ForwardRef = forwardRef(PieChartIcon);
export default ForwardRef;
