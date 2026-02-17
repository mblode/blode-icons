import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SofaIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 13c0-1.1046.8954-2 2-2s2 .8954 2 2v.5h12V13c0-1.1046.8954-2 2-2s2 .8954 2 2v1c0 1.6569-1.3431 3-3 3H5c-1.6568 0-3-1.3431-3-3zM20 11V9c0-2.2091-1.7909-4-4-4H8C5.7909 5 4 6.7909 4 9v2M5 17v2M19 17v2" style={{
    stroke: "currentColor",
    strokeOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(SofaIcon);
export default createLucideIcon('SofaIcon', ForwardRef);
