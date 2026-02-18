import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const MathLessThanCircleIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeWidth={2} d="M3 12c0 4.9706 4.0294 9 9 9s9-4.0294 9-9-4.0294-9-9-9-9 4.0294-9 9Z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m14.5 9-6 3 6 3" /></svg>;
const ForwardRef = forwardRef(MathLessThanCircleIcon);
export default createLucideIcon('MathLessThanCircleIcon', ForwardRef);
