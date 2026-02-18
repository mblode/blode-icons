import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CircleDottedIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12.0001 3.01V3m0 18v.01m3.4423-17.3153.0038-.0092M8.5579 20.3153l-.0038.0092m9.8064-14.6798.0071-.0071M5.6396 18.3655l-.007.0071M20.3103 8.563l.0093-.0039M3.6898 15.4474l-.0093.0039m-.6754-3.4463h-.01m18 0h.01M5.6399 5.6445l-.007-.007m12.7279 12.7279.007.007m-14.6777-9.81-.0092-.0038m16.6298 6.8883.0093.0039M8.5579 3.6947l-.0039-.0093m6.8883 16.6299.0039.0092" /></svg>;
const ForwardRef = forwardRef(CircleDottedIcon);
export default createLucideIcon('CircleDottedIcon', ForwardRef);
