import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Banknote2Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><rect width={19} height={13} x={2.5} y={5.5} stroke="currentColor" strokeLinejoin="round" strokeWidth={2} rx={3} /><circle cx={12} cy={12} r={2} stroke="currentColor" strokeLinejoin="round" strokeWidth={2} /><path stroke="currentColor" strokeLinejoin="round" strokeWidth={2} d="M21 9c-1.6569 0-3-1.3431-3-3M6 6c0 1.6569-1.3431 3-3 3M18 18c0-1.6569 1.3431-3 3-3M6 18c0-1.6569-1.3431-3-3-3" /></svg>;
const ForwardRef = forwardRef(Banknote2Icon);
export default ForwardRef;
