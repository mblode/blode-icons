import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SushiIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="square" strokeWidth={2} d="M20 14.5V16c0 1.6569-1.3431 3-3 3H7c-1.6569 0-3-1.3431-3-3v-1.5" /><path stroke="currentColor" strokeLinejoin="round" strokeWidth={2} d="M9 11.6429c-4.0571 1.3035-7 5.3697-7 1.3788s2.9429-6.7832 7-7.6972m6 6.3184c4.0571 1.3035 7 5.3697 7 1.3788s-2.9429-6.7832-7-7.6972" /><path stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" strokeWidth={2} d="M9 19V6.7237c0-1.4028.9743-2.6502 2.3759-2.7104a14.6 14.6 0 0 1 1.2482 0C14.0257 4.0735 15 5.321 15 6.7237V19" /></svg>;
const ForwardRef = forwardRef(SushiIcon);
export default createLucideIcon('SushiIcon', ForwardRef);
