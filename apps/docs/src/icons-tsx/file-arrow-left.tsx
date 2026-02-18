import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const FileArrowLeftIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 21c1.6569 0 3-1.3431 3-3v-7.7574a3 3 0 0 0-.8787-2.1213l-4.2426-4.2426A3 3 0 0 0 11.7574 3H8C6.3431 3 5 4.3431 5 6v6" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 4v3c0 1.1046.8954 2 2 2h3M5 19h6M7 22l-3-3 3-3" /></svg>;
const ForwardRef = forwardRef(FileArrowLeftIcon);
export default createLucideIcon('FileArrowLeftIcon', ForwardRef);
