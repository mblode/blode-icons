import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ArrowInboxIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 15v2c0 1.6569-1.3431 3-3 3H7c-1.6569 0-3-1.3431-3-3v-2m8-.5V4m0 10.5L8.5 11m3.5 3.5 3.5-3.5" /></svg>;
const ForwardRef = forwardRef(ArrowInboxIcon);
export default createLucideIcon('ArrowInboxIcon', ForwardRef);
