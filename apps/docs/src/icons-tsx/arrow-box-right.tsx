import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ArrowBoxRightIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 4h2c1.6569 0 3 1.3431 3 3v10c0 1.6569-1.3431 3-3 3h-2m-.5-8H4m10.5 0L11 15.5m3.5-3.5L11 8.5" /></svg>;
const ForwardRef = forwardRef(ArrowBoxRightIcon);
export default createLucideIcon('ArrowBoxRightIcon', ForwardRef);
