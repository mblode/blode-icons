import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const PercentIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m15.5 8.5-7 7M21 12c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9" /><path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.75} d="M9 9.875a.875.875 0 1 0 0-1.75.875.875 0 0 0 0 1.75M15 15.875a.875.875 0 1 0-.0001-1.7501A.875.875 0 0 0 15 15.875" /></svg>;
const ForwardRef = forwardRef(PercentIcon);
export default createLucideIcon('PercentIcon', ForwardRef);
