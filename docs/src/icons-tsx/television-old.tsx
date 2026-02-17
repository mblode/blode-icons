import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const TelevisionOldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7.5 3.5 12 7l4.5-3.5M6 20h12c1.6569 0 3-1.3431 3-3v-7c0-1.6569-1.3431-3-3-3H6c-1.6569 0-3 1.3431-3 3v7c0 1.6569 1.3431 3 3 3" /></svg>;
const ForwardRef = forwardRef(TelevisionOldIcon);
export default createLucideIcon('TelevisionOldIcon', ForwardRef);
