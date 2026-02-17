import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const LockIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 10H8m8 0c1.6569 0 3 1.3431 3 3v5c0 1.6569-1.3431 3-3 3H8c-1.6569 0-3-1.3431-3-3v-5c0-1.6569 1.3431-3 3-3m8 0V7c0-2.2091-1.7909-4-4-4S8 4.7909 8 7v3m4 4v3" /></svg>;
const ForwardRef = forwardRef(LockIcon);
export default createLucideIcon('LockIcon', ForwardRef);
