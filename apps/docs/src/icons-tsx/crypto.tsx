import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CryptoIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 7.9587a2 2 0 0 1 2 0l2 1.1546a2 2 0 0 1 1 1.7321v2.3093a2 2 0 0 1-1 1.732l-2 1.1547a2 2 0 0 1-2 0l-2-1.1547a2 2 0 0 1-1-1.732v-2.3093a2 2 0 0 1 1-1.732z" /></svg>;
const ForwardRef = forwardRef(CryptoIcon);
export default createLucideIcon('CryptoIcon', ForwardRef);
