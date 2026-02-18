import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const PiloneIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.5 10h-7m-1 4h9m2.3529 5.5L14.5643 4.9187a2.673 2.673 0 0 0-5.1286 0L5.147 19.5M3 20h18" /></svg>;
const ForwardRef = forwardRef(PiloneIcon);
export default createLucideIcon('PiloneIcon', ForwardRef);
