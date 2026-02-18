import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const BookSimpleIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeWidth={2} d="M7 21h9c1.6569 0 3-1.3431 3-3V6c0-1.6569-1.3431-3-3-3H7c-1.1046 0-2 .8954-2 2v14m2 2c-1.1046 0-2-.8954-2-2m2 2h3m-5-2c0-1.1046.8954-2 2-2h9c1.6569 0 3-1.3431 3-3v-2" /></svg>;
const ForwardRef = forwardRef(BookSimpleIcon);
export default createLucideIcon('BookSimpleIcon', ForwardRef);
