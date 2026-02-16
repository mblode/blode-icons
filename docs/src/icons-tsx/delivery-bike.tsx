import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const DeliveryBikeIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><circle cx={19} cy={16} r={3} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} style={{
    stroke: "currentColor",
    strokeOpacity: 1
  }} /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 16c0 1.6569-1.3431 3-3 3s-3-1.3431-3-3M17 10l-1.2572-3.143A2.954 2.954 0 0 0 13 5M9 15H3c-.5523 0-1-.4477-1-1v-2c0-1.6569 1.3432-3 3-3h2c1.6569 0 3 1.3431 3 3v2c0 .5523-.4477 1-1 1M19 10c-2.3793 0-4.4351 1.3849-5.4053 3.3925C13.1696 14.2721 12.3674 15 11.3905 15H10" style={{
    stroke: "currentColor",
    strokeOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(DeliveryBikeIcon);
export default ForwardRef;
