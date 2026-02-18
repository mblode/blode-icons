import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Voice3Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 12c-2.5-1.5-2.5-7-4.5-7s-2 5-4.5 5-2.5-8-5-8-3 8.5-6 10c3 1.5 3.5 10 6 10s2.5-8 5-8 2.5 5 4.5 5 1.5-5.5 4.5-7" /></svg>;
const ForwardRef = forwardRef(Voice3Icon);
export default createLucideIcon('Voice3Icon', ForwardRef);
