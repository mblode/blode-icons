import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ConstructionHelmetIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 14.9999v-2.5c0-3.7277 2.5496-6.8599 6-7.748M20 15v-2.5c0-3.7277-2.5495-6.8599-6-7.748M10 15V5c0-.5523.4477-1 1-1h2c.5523 0 1 .4477 1 1v10" /><rect width={18} height={4} x={3} y={15} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} rx={1} /></svg>;
const ForwardRef = forwardRef(ConstructionHelmetIcon);
export default createLucideIcon('ConstructionHelmetIcon', ForwardRef);
