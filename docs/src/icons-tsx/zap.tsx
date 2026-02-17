import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ZapIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinejoin="round" strokeWidth={2} d="M19.5657 9H13.5a.5.5 0 0 1-.5-.5V2.4014c0-.4947-.6416-.689-.916-.2774L4.0182 14.2226c-.2215.3323.0167.7774.416.7774H10.5a.5.5 0 0 1 .5.5v6.0986c0 .4947.6416.689.916.2774l8.0658-12.0987C20.2033 9.4452 19.9651 9 19.5657 9Z" /></svg>;
const ForwardRef = forwardRef(ZapIcon);
export default createLucideIcon('ZapIcon', ForwardRef);
