import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const BackIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5v14M16.6123 5.2746l-7.9738 5.5189a1.4592 1.4592 0 0 0 0 2.413l7.9738 5.5189C17.6144 19.419 19 18.7188 19 17.5189V6.4811c0-1.2-1.3856-1.9-2.3877-1.2065" /></svg>;
const ForwardRef = forwardRef(BackIcon);
export default createLucideIcon('BackIcon', ForwardRef);
