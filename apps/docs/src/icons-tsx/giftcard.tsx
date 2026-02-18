import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const GiftcardIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5v7m0 0v7m0-7h7m-7 0H3m11 0 3-3m-3 3-3-3m3 3 3 3m-3-3-3 3m-5 4h12c1.6569 0 3-1.3431 3-3V8c0-1.6569-1.3431-3-3-3H6C4.3431 5 3 6.3431 3 8v8c0 1.6569 1.3431 3 3 3" /></svg>;
const ForwardRef = forwardRef(GiftcardIcon);
export default createLucideIcon('GiftcardIcon', ForwardRef);
