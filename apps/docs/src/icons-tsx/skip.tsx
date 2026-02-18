import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SkipIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 5v14M7.3877 5.2746l7.9738 5.5189a1.4592 1.4592 0 0 1 0 2.413l-7.9738 5.5189C6.3857 19.419 5 18.7188 5 17.5189V6.4811c0-1.2 1.3856-1.9 2.3877-1.2065" /></svg>;
const ForwardRef = forwardRef(SkipIcon);
export default createLucideIcon('SkipIcon', ForwardRef);
