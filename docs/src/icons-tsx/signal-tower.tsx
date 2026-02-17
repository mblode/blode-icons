import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SignalTowerIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><circle cx={12} cy={9.5} r={1.5} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} style={{
    stroke: "currentColor",
    strokeOpacity: 1
  }} /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7.757 13.0001C6.081 10.9734 6.081 8.0268 7.757 6m8.4861 0c1.6759 2.0268 1.6759 4.9734 0 7.0001M5.065 3.0074C1.6428 6.6582 1.645 12.3518 5.0713 16M18.9282 3c3.4291 3.6505 3.4292 9.3493.0004 13M8 21l3.75-11h.5L16 21M9.5 18h5" style={{
    stroke: "currentColor",
    strokeOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(SignalTowerIcon);
export default createLucideIcon('SignalTowerIcon', ForwardRef);
