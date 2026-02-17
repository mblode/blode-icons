import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Camera5Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16h3M9.5 5H6C4.3431 5 3 6.3431 3 8v9c0 1.6569 1.3431 3 3 3h12c1.6569 0 3-1.3431 3-3v-.5M15 13h4c1.1046 0 2-.8954 2-2V7c0-1.1046-.8954-2-2-2h-4c-1.1046 0-2 .8954-2 2v4c0 1.1046.8954 2 2 2" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="M17 9h.01m.24 0a.25.25 0 1 1-.5 0 .25.25 0 0 1 .5 0Z" /></svg>;
const ForwardRef = forwardRef(Camera5Icon);
export default createLucideIcon('Camera5Icon', ForwardRef);
