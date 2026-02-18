import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const BooleanGroupUnionIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" strokeWidth={2} d="M18 3h-6c-1.6569 0-3 1.3431-3 3v3H6c-1.6569 0-3 1.3431-3 3v6c0 1.6569 1.3431 3 3 3h6c1.6569 0 3-1.3431 3-3v-3h3c1.6569 0 3-1.3431 3-3V6c0-1.6569-1.3431-3-3-3Z" /></svg>;
const ForwardRef = forwardRef(BooleanGroupUnionIcon);
export default createLucideIcon('BooleanGroupUnionIcon', ForwardRef);
