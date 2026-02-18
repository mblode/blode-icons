import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const HeadIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 14.0662V16c0 1.1046-.8954 2-2 2s-2 .8954-2 2c0 .5523-.4477 1-1 1H8c-.5523 0-.9977-.448-.9973-1.0002.0012-2.0824-.0906-3.869-1.5136-5.683C4.5563 13.1275 4 11.6287 4 10c0-3.866 3.134-7 7-7 2.8499 0 5.4738 1.3678 6.5555 4.1328.6262 1.6006 1.4344 2.689 2.3517 4.0018.327.468.1831 1.1112-.3065 1.405l-1.1152.6691a1 1 0 0 0-.4855.8575" /></svg>;
const ForwardRef = forwardRef(HeadIcon);
export default createLucideIcon('HeadIcon', ForwardRef);
