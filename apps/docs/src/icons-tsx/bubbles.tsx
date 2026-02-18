import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const BubblesIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16.9998 14h1.5022c1.3807 0 2.5-1.1193 2.5-2.5v-5c0-1.3807-1.1193-2.5-2.5-2.5h-9c-1.3808 0-2.5 1.1193-2.5 2.5V8m7.5 0h-9c-1.3808 0-2.5 1.1193-2.5 2.5v5c0 1.3807 1.1192 2.5 2.5 2.5h.5v2.5l4.5-2.5h4c1.3807 0 2.5-1.1193 2.5-2.5v-5c0-1.3807-1.1193-2.5-2.5-2.5" /></svg>;
const ForwardRef = forwardRef(BubblesIcon);
export default createLucideIcon('BubblesIcon', ForwardRef);
