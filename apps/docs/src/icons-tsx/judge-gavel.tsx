import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const JudgeGavelIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 13h2M5.5 9.5 4 8M15.7482 9.2502l-2 2c-.6903.6903-1.8096.6903-2.5 0s-.6903-1.8097 0-2.5l4-4c.6904-.6904 1.8097-.6904 2.5 0 .6904.6903.6904 1.8096 0 2.5zm0 0 4.75 4.75M15 20h1m-1 0-.3162-.9487A3 3 0 0 0 11.8377 17H7.1623a3 3 0 0 0-2.846 2.0513L4 20m11 0H4m-1 0h1" /></svg>;
const ForwardRef = forwardRef(JudgeGavelIcon);
export default createLucideIcon('JudgeGavelIcon', ForwardRef);
