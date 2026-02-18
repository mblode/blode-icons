import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const WindowCursorIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" stroke="currentColor" strokeLinecap="square" strokeWidth={0.75} d="M5.875 8.75a.875.875 0 1 0 1.75 0 .875.875 0 0 0-1.75 0Zm3.5 0a.875.875 0 1 0 1.75 0 .875.875 0 0 0-1.75 0Zm3.5 0a.875.875 0 1 0 1.75 0 .875.875 0 0 0-1.75 0Z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.25V8c0-1.6569-1.3431-3-3-3H6C4.3431 5 3 6.3431 3 8v9c0 1.6569 1.3431 3 3 3h6m10-2.5-6.5-2 2 6.5 1.5-3z" /></svg>;
const ForwardRef = forwardRef(WindowCursorIcon);
export default createLucideIcon('WindowCursorIcon', ForwardRef);
