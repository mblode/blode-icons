import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ReceiptStornoIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 15h6m-1.2803-7.4697L12 9.25m0 0-1.7197 1.7197M12 9.25l-1.7197-1.7197M12 9.25l1.7197 1.7197M19 21V6c0-1.6569-1.3431-3-3-3H8C6.3431 3 5 4.3431 5 6v15l2.3333-2 2.3334 2L12 19l2.3333 2 2.3334-2z" /></svg>;
const ForwardRef = forwardRef(ReceiptStornoIcon);
export default ForwardRef;
