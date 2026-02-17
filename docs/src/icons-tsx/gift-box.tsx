import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const GiftBoxIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 5H6C4.3431 5 3 6.3431 3 8c0 .5523.4477 1 1 1h16c.5523 0 1-.4477 1-1 0-1.6569-1.3431-3-3-3M20 9v7c0 1.6569-1.3431 3-3 3H7c-1.6569 0-3-1.3431-3-3V9M12 5v14" style={{
    stroke: "currentColor",
    strokeOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(GiftBoxIcon);
export default createLucideIcon('GiftBoxIcon', ForwardRef);
