import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const BrightnessIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><circle cx={12} cy={12} r={5} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2v1m0 18v1M4.929 4.929l.707.707m12.728 12.728.7071.7071m0-14.1421-.7071.707M5.636 18.364l-.707.7071M2 12h1m18 0h1" /></svg>;
const ForwardRef = forwardRef(BrightnessIcon);
export default createLucideIcon('BrightnessIcon', ForwardRef);
