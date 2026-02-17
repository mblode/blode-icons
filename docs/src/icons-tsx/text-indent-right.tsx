import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const TextIndentRightIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 6H3m11 6H3m11 6H3m16-6h1.5m.5-2.66L18 12l3 2.65z" /></svg>;
const ForwardRef = forwardRef(TextIndentRightIcon);
export default createLucideIcon('TextIndentRightIcon', ForwardRef);
