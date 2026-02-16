import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const FrisbeeIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 12c0 2.7614-4.4772 5-10 5S2 14.7614 2 12s4.4772-5 10-5 10 2.2386 10 5" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 10.5c0 1.933-3.5817 3.5-8 3.5s-8-1.567-8-3.5S7.5817 7 12 7s8 1.567 8 3.5M3 6.2273c2.1108-1.2465 4.9038-2.059 8-2.2039m2 15.9534c3.0962-.1449 5.8892-.9573 8-2.2038" /></svg>;
const ForwardRef = forwardRef(FrisbeeIcon);
export default ForwardRef;
