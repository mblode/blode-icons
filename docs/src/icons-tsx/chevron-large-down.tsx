import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ChevronLargeDownIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m3 10 7.5431 4.1906a3 3 0 0 0 2.9138 0L21 10" /></svg>;
const ForwardRef = forwardRef(ChevronLargeDownIcon);
export default createLucideIcon('ChevronLargeDownIcon', ForwardRef);
