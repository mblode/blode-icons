import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const LimitIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m11.9986 13-3-3m-3.7071 9c-3.1662-3.5337-3.0513-8.9681.3445-12.364 3.5148-3.5147 9.2132-3.5147 12.728 0 3.3958 3.3959 3.5107 8.8303.3445 12.364" /></svg>;
const ForwardRef = forwardRef(LimitIcon);
export default createLucideIcon('LimitIcon', ForwardRef);
