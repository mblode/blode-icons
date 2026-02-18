import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ChainLink4Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m10 18.9999-.1716.1716c-1.562 1.5621-4.0947 1.5621-5.6568 0l-.3432-.3432c-1.562-1.5621-1.562-4.0947 0-5.6568l3.3432-3.3432c1.562-1.562 4.0947-1.562 5.6568 0l.3432.3432a3.983 3.983 0 0 1 1.1404 2.3284" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.688 12.4999a3.983 3.983 0 0 0 1.1404 2.3284l.3431.3432c1.5621 1.5621 4.0948 1.5621 5.6569 0l3.3431-3.3432c1.5621-1.5621 1.5621-4.0947 0-5.6568l-.3431-.3432c-1.5621-1.562-4.0948-1.562-5.6569 0L14 6" /></svg>;
const ForwardRef = forwardRef(ChainLink4Icon);
export default createLucideIcon('ChainLink4Icon', ForwardRef);
