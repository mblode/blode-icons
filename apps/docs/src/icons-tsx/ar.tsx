import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ArIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeWidth={2} d="M2 9c0-1.6569 1.3432-3 3-3h14c1.6569 0 3 1.3431 3 3v7c0 1.6569-1.3431 3-3 3h-1.8728a3 3 0 0 1-1.9755-.7423l-1.8347-1.6053c-.754-.6598-1.88-.6598-2.634 0l-1.8347 1.6053A3 3 0 0 1 6.8728 19H5c-1.6568 0-3-1.3431-3-3z" /><path stroke="currentColor" strokeWidth={2} d="M9.25 11.5c0 .9665-.7835 1.75-1.75 1.75s-1.75-.7835-1.75-1.75.7835-1.75 1.75-1.75 1.75.7835 1.75 1.75ZM18.25 11.5c0 .9665-.7835 1.75-1.75 1.75s-1.75-.7835-1.75-1.75.7835-1.75 1.75-1.75 1.75.7835 1.75 1.75Z" /></svg>;
const ForwardRef = forwardRef(ArIcon);
export default createLucideIcon('ArIcon', ForwardRef);
