import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ReceiptCheck2Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 15h6m-5-5.5 1.5 1.5 3-3M19 21V6c0-1.6569-1.3431-3-3-3H8C6.3431 3 5 4.3431 5 6v15l2.3333-2 2.3334 2L12 19l2.3333 2 2.3334-2z" /></svg>;
const ForwardRef = forwardRef(ReceiptCheck2Icon);
export default createLucideIcon('ReceiptCheck2Icon', ForwardRef);
