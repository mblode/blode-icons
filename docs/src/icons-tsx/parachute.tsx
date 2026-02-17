import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ParachuteIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><rect width={4} height={4} x={10} y={17} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} rx={2} style={{
    stroke: "currentColor",
    strokeOpacity: 1
  }} /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 13c0-5.5228-4.4772-10-10-10S2 7.4772 2 13m20 0-7.5 5.5M22 13c-3.4334-2.3703-6.7167-3.5555-10-3.5555M2 13l7.5 5.5M2 13c3.4334-2.3703 6.7167-3.5555 10-3.5555m0 0V17" style={{
    stroke: "currentColor",
    strokeOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(ParachuteIcon);
export default createLucideIcon('ParachuteIcon', ForwardRef);
