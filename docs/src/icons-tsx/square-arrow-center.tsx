import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SquareArrowCenterIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V8.8c0-1.6802 0-2.5202-.327-3.162a3 3 0 0 0-1.311-1.311C17.7202 4 16.8802 4 15.2 4H8.8c-1.6802 0-2.5202 0-3.162.327a3 3 0 0 0-1.311 1.311C4 6.2798 4 7.1198 4 8.8v6.4c0 1.6802 0 2.5202.327 3.162a3 3 0 0 0 1.311 1.311C6.2798 20 7.1198 20 8.8 20H13m-3-5v-5m0 0h5m-5 0 8 8" /></svg>;
const ForwardRef = forwardRef(SquareArrowCenterIcon);
export default createLucideIcon('SquareArrowCenterIcon', ForwardRef);
