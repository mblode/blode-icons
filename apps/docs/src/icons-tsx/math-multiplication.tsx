import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const MathMultiplicationIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="M5 12h14M11.9 6.5h.2m.4 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM11.9 17.5h.2m.4 0a.5.5 0 1 1-1.0001-.0001A.5.5 0 0 1 12.5 17.5Z" /></svg>;
const ForwardRef = forwardRef(MathMultiplicationIcon);
export default createLucideIcon('MathMultiplicationIcon', ForwardRef);
