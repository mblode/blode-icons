import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CurrencyPesosIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 11H4M20 7H4M7 21V3h5c3.3137 0 6 2.6863 6 6s-2.6863 6-6 6H7.5" /></svg>;
const ForwardRef = forwardRef(CurrencyPesosIcon);
export default createLucideIcon('CurrencyPesosIcon', ForwardRef);
