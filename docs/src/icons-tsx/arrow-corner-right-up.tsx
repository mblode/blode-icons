import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ArrowCornerRightUpIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 20h7c1.6569 0 3-1.3431 3-3V5m-4 3 4-4 4 4" /></svg>;
const ForwardRef = forwardRef(ArrowCornerRightUpIcon);
export default createLucideIcon('ArrowCornerRightUpIcon', ForwardRef);
