import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const TextIndentLeftIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6h11m-11 6h11m-11 6h11M5 12H3.5M3 9.34 6 12l-3 2.65z" /></svg>;
const ForwardRef = forwardRef(TextIndentLeftIcon);
export default createLucideIcon('TextIndentLeftIcon', ForwardRef);
