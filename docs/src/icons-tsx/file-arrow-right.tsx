import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const FileArrowRightIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 3.5V8c0 .5523.4477 1 1 1h4.5" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 21h1c1.6569 0 3-1.3431 3-3v-7.7574a3 3 0 0 0-.8787-2.1213l-4.2426-4.2426A3 3 0 0 0 11.7574 3H8C6.3431 3 5 4.3431 5 6v7M4 19h6M8 16l3 3-3 3" /></svg>;
const ForwardRef = forwardRef(FileArrowRightIcon);
export default createLucideIcon('FileArrowRightIcon', ForwardRef);
