import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ArrowRotateCounterClockwiseFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M19.0275 12c0-3.866-3.134-7-7-7-1.974 0-3.4027.6795-4.7864 2H9c.5523 0 1 .4477 1 1s-.4477 1-1 1h-3c-1.1045 0-2-.8954-2-2V4c0-.5523.4478-1 1-1s1 .4477 1 1v1.423C7.6223 3.922 9.4761 3 12.0275 3c4.9705 0 9 4.0294 9 9s-4.0295 9-9 9c-3.9202 0-7.2526-2.5059-8.4876-6.0001-.184-.5207.0888-1.092.6096-1.2761s1.092.0889 1.276.6096C6.387 17.0536 8.9812 19 12.0275 19c3.866 0 7-3.134 7-7" /></svg>;
const ForwardRef = forwardRef(ArrowRotateCounterClockwiseFilledIcon);
export default createLucideIcon('ArrowRotateCounterClockwiseFilledIcon', ForwardRef);
