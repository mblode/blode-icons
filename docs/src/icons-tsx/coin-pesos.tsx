import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CoinPesosIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 10.5h8" /><path stroke="currentColor" strokeWidth={2} d="M21 12c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9Z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10 13.5h1.5c1.6569 0 3-1.3431 3-3s-1.3431-3-3-3H10zm0 0v3" /></svg>;
const ForwardRef = forwardRef(CoinPesosIcon);
export default ForwardRef;
