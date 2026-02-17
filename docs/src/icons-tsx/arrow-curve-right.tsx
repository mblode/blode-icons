import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ArrowCurveRightIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 20V8c0-2.2091-1.7909-4-4-4S4 5.7909 4 8s1.7909 4 4 4h12" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m17 9 3 3-3 3" /></svg>;
const ForwardRef = forwardRef(ArrowCurveRightIcon);
export default createLucideIcon('ArrowCurveRightIcon', ForwardRef);
