import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CryptoWalletIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6.5C4 5.1193 5.1193 4 6.5 4h8.0882C15.3679 4 16 4.632 16 5.4118V9M4 6.5C4 7.8807 5.1193 9 6.5 9H16M4 6.5v4M16 9h1c1.6569 0 3 1.3431 3 3v5c0 1.6569-1.3431 3-3 3h-4M6 13.75l3 1.75V19l-3 1.75L3 19v-3.5z" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="M15.5 14.5h.01m.24 0a.25.25 0 1 1-.5 0 .25.25 0 0 1 .5 0Z" /></svg>;
const ForwardRef = forwardRef(CryptoWalletIcon);
export default createLucideIcon('CryptoWalletIcon', ForwardRef);
