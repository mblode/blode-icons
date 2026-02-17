import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const WizardHatIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={25} height={24} fill="none" viewBox="0 0 25 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.75 20h18" style={{
    stroke: "currentColor",
    strokeOpacity: 1
  }} /><path stroke="currentColor" strokeWidth={2} d="M13.2085 15.75c.1125-.0805.211-.179.2915-.2915.0805.1125.179.211.2915.2915a1.26 1.26 0 0 0-.2915.2915 1.26 1.26 0 0 0-.2915-.2915ZM10.4585 11.75c.1125-.0805.211-.179.2915-.2915.0805.1125.179.211.2915.2915a1.26 1.26 0 0 0-.2915.2915 1.26 1.26 0 0 0-.2915-.2915Z" style={{
    stroke: "currentColor",
    strokeOpacity: 1
  }} /><path stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" strokeWidth={2} d="m5.75 19.5001 5.7588-15.2196c.5482-1.4489 2.4645-1.7513 3.4323-.5416L18.75 8.5001h-3.8l4.8 11" style={{
    stroke: "currentColor",
    strokeOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(WizardHatIcon);
export default createLucideIcon('WizardHatIcon', ForwardRef);
