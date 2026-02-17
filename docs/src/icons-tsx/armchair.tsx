import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ArmchairIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 15v-2c0-1.1046-.8954-2-2-2s-2 .8954-2 2v1H8v-1c0-1.1046-.8954-2-2-2s-2 .8954-2 2v2c0 1.6569 1.3431 3 3 3h10c1.6569 0 3-1.3431 3-3M18 11V7c0-1.6569-1.3431-3-3-3H9C7.3431 4 6 5.3431 6 7v4M6 18v2M18 18v2" style={{
    stroke: "currentColor",
    strokeOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(ArmchairIcon);
export default createLucideIcon('ArmchairIcon', ForwardRef);
