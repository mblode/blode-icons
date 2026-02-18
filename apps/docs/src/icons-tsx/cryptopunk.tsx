import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CryptopunkIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 21v-7c-1.1046 0-2-.8954-2-2s.8954-2 2-2V7m5 14v-2h4c1.6569 0 3-1.3431 3-3V7M6 7h12M6 7V6c0-1.6569 1.3431-3 3-3h6c1.6569 0 3 1.3431 3 3v1m0 0h3m-10 3h.01M15 10h.01M14 15c-2 .5-3 0-4-1" /></svg>;
const ForwardRef = forwardRef(CryptopunkIcon);
export default createLucideIcon('CryptopunkIcon', ForwardRef);
