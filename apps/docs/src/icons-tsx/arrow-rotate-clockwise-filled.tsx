import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ArrowRotateClockwiseFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M4.9727 12c0-3.866 3.134-7 7-7 1.9739 0 3.4026.6795 4.7864 2H15c-.5523 0-1 .4477-1 1s.4477 1 1 1h3c1.1046 0 2-.8954 2-2V4c0-.5523-.4477-1-1-1s-1 .4477-1 1v1.423C16.3778 3.922 14.5241 3 11.9727 3c-4.9706 0-9 4.0294-9 9s4.0294 9 9 9c3.9202 0 7.2526-2.5059 8.4876-6.0001.184-.5207-.0889-1.092-.6096-1.2761s-1.0921.0889-1.2761.6096C17.6132 17.0536 15.0189 19 11.9727 19c-3.866 0-7-3.134-7-7" /></svg>;
const ForwardRef = forwardRef(ArrowRotateClockwiseFilledIcon);
export default createLucideIcon('ArrowRotateClockwiseFilledIcon', ForwardRef);
