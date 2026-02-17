import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const BackpackIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11h2c1.6569 0 3-1.3431 3-3V7c0-1.1046-.8954-2-2-2h-3m0 6H9m6 0v2m-6-2H7c-1.6569 0-3-1.3431-3-3V7c0-1.1046.8954-2 2-2h3m0 6v2m-4-2v7c0 1.6569 1.3431 3 3 3h8c1.6569 0 3-1.3431 3-3v-7M9 5h6M9 5c0-1.6568 1.3431-3 3-3s3 1.3432 3 3m-5 12h4" /></svg>;
const ForwardRef = forwardRef(BackpackIcon);
export default createLucideIcon('BackpackIcon', ForwardRef);
