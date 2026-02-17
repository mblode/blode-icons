import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SquareArrowTopRight2Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 4h-.2c-1.6802 0-2.5202 0-3.162.327a3 3 0 0 0-1.311 1.311C4 6.2798 4 7.1198 4 8.8v6.4c0 1.6802 0 2.5202.327 3.162a3 3 0 0 0 1.311 1.311C6.2798 20 7.1198 20 8.8 20h6.4c1.6802 0 2.5202 0 3.162-.327a3 3 0 0 0 1.311-1.311C20 17.7202 20 16.8802 20 15.2V15M14 4h6m0 0v6m0-6-9 9" /></svg>;
const ForwardRef = forwardRef(SquareArrowTopRight2Icon);
export default createLucideIcon('SquareArrowTopRight2Icon', ForwardRef);
