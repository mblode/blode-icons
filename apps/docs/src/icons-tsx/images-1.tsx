import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Images1Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinejoin="round" strokeWidth={2} d="m4 14.2105 2.8449-2.1284c.8165-.5443 1.9073-.4158 2.575.3032 1.4924 1.6073 3.2227 3.0685 5.5801 3.0685 2.1727 0 3.6125-.8053 5-2.1928M7 20h10c1.6569 0 3-1.3431 3-3V7c0-1.6569-1.3431-3-3-3H7C5.3431 4 4 5.3431 4 7v10c0 1.6569 1.3431 3 3 3ZM17 9c0 1.1046-.8954 2-2 2s-2-.8954-2-2 .8954-2 2-2 2 .8954 2 2Z" /></svg>;
const ForwardRef = forwardRef(Images1Icon);
export default createLucideIcon('Images1Icon', ForwardRef);
