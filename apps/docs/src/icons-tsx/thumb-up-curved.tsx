import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ThumbUpCurvedIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinejoin="round" strokeWidth={2} d="M13.4537 3.0567 13 3c-.9646 2.3088-2.4059 4.3034-4.1068 6.0976C8.3348 9.6866 8 10.458 8 11.2698v6.4553c0 .7777.447 1.4963 1.1778 1.7624 2.4795.9029 5.0733 1.0961 7.6954.8689 1.6013-.1388 2.8561-1.3754 3.2089-2.9434l.8447-3.7545C21.3488 11.7829 19.9225 10 18 10h-3l.949-3.0842c.5484-1.7823-.6449-3.6278-2.4953-3.859ZM3 12c0-1.1046.8954-2 2-2 1.6569 0 3 1.3431 3 3v4c0 1.6569-1.3431 3-3 3-1.1046 0-2-.8954-2-2z" /></svg>;
const ForwardRef = forwardRef(ThumbUpCurvedIcon);
export default createLucideIcon('ThumbUpCurvedIcon', ForwardRef);
