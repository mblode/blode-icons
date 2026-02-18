import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ChevronDoubleLeftIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m9.9998 16-2.9394-2.9393c-.5857-.5858-.5857-1.5356 0-2.1214L9.9998 8m7 8-2.9394-2.9393c-.5858-.5858-.5858-1.5356 0-2.1214L16.9998 8" /></svg>;
const ForwardRef = forwardRef(ChevronDoubleLeftIcon);
export default createLucideIcon('ChevronDoubleLeftIcon', ForwardRef);
