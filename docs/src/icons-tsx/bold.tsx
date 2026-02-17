import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const BoldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" strokeWidth={2} d="M13 12H6m7 0c2.2091 0 4-1.7909 4-4s-1.7909-4-4-4H9C7.3431 4 6 5.3431 6 7v5m7 0h1c2.2091 0 4 1.7909 4 4s-1.7909 4-4 4H9c-1.6569 0-3-1.3431-3-3v-5" /></svg>;
const ForwardRef = forwardRef(BoldIcon);
export default createLucideIcon('BoldIcon', ForwardRef);
