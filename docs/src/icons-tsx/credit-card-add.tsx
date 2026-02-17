import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CreditCardAddIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14v3m0 0v3m0-3h-3m3 0h3M3 10v6c0 1.6569 1.343 3 3 3h6m-9-9V8c0-1.6569 1.3431-3 3-3h12c1.6569 0 3 1.3433 3 3.0002V10z" /></svg>;
const ForwardRef = forwardRef(CreditCardAddIcon);
export default createLucideIcon('CreditCardAddIcon', ForwardRef);
