import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Wallet1Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinejoin="round" strokeWidth={2} d="M3 8h18M3 8v3m0-3c0-1.6569 1.3431-3 3-3h12c1.6569 0 3 1.3431 3 3m0 0v3m0 0v5c0 1.6569-1.3431 3-3 3H6c-1.6569 0-3-1.3431-3-3v-5m18 0h-6c0 1.1046-.8954 2-2 2h-2c-1.1046 0-2-.8954-2-2H3" /></svg>;
const ForwardRef = forwardRef(Wallet1Icon);
export default createLucideIcon('Wallet1Icon', ForwardRef);
