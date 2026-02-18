import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const RescueRingFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M4.257 5.6713C2.8464 7.3952 2 9.5988 2 12s.8464 4.6049 2.2571 6.3288l3.933-3.933A4.48 4.48 0 0 1 7.5 12c0-.8805.2529-1.702.69-2.3957zM5.6712 4.257l3.933 3.933A4.48 4.48 0 0 1 12 7.5c.8806 0 1.7021.253 2.3958.69l3.933-3.9329C16.6049 2.8464 14.4013 2 12 2s-4.6049.8464-6.3288 2.257M19.743 5.6713l-3.933 3.933A4.48 4.48 0 0 1 16.5 12c0 .8806-.2529 1.702-.6901 2.3958l3.933 3.933C21.1536 16.6049 22 14.4013 22 12c0-2.4012-.8463-4.6048-2.257-6.3287M18.3287 19.743l-3.933-3.933A4.48 4.48 0 0 1 12 16.5a4.48 4.48 0 0 1-2.3957-.69l-3.933 3.933C7.3952 21.1537 9.5988 22 12 22s4.6048-.8464 6.3287-2.257" /></svg>;
const ForwardRef = forwardRef(RescueRingFilledIcon);
export default createLucideIcon('RescueRingFilledIcon', ForwardRef);
