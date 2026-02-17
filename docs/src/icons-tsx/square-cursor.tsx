import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SquareCursorIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 10V7c0-1.6569-1.3431-3-3-3H7C5.3431 4 4 5.3431 4 7v10c0 1.6569 1.3431 3 3 3h3m4.1879.8366-2.2133-8.2495c-.0998-.3719.2406-.7123.6125-.6125l8.2495 2.2133c.4299.1153.5062.6926.121.9156l-3.6499 2.1131a.25.25 0 0 0-.0911.0911l-2.1131 3.6499c-.223.3852-.8003.3089-.9156-.121" /></svg>;
const ForwardRef = forwardRef(SquareCursorIcon);
export default createLucideIcon('SquareCursorIcon', ForwardRef);
