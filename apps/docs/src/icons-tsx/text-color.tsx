import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const TextColorIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 7.375C21 8.7281 19.8807 10 18.5 10S16 8.7281 16 7.375C16 5.625 18.5 3 18.5 3S21 5.625 21 7.375M3 20l7-15 7 15M6 15h8" /></svg>;
const ForwardRef = forwardRef(TextColorIcon);
export default createLucideIcon('TextColorIcon', ForwardRef);
