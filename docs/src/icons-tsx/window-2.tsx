import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Window2Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeWidth={2} d="M3 11h18M6 19h12c1.6569 0 3-1.3431 3-3V8c0-1.6569-1.3431-3-3-3H6C4.3431 5 3 6.3431 3 8v8c0 1.6569 1.3431 3 3 3Z" /><path fill="currentColor" stroke="currentColor" strokeWidth={0.5} d="M6 8.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm3 0a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm3 0a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" /></svg>;
const ForwardRef = forwardRef(Window2Icon);
export default createLucideIcon('Window2Icon', ForwardRef);
