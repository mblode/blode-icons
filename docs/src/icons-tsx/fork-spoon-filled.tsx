import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ForkSpoonFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M17 2.75c-1.287 0-2.3698.7076-3.0957 1.6675C13.1773 5.379 12.75 6.6561 12.75 8c0 2.2729 1.2828 4.3402 3.25 4.8695V20c0 .5523.4477 1 1 1s1-.4477 1-1v-7.1305c1.9672-.5293 3.25-2.5966 3.25-4.8695 0-1.344-.4273-2.621-1.1543-3.5825C19.3698 3.4576 18.287 2.75 17 2.75M5 4c0-.5523-.4477-1-1-1s-1 .4477-1 1v5c0 1.8638 1.2748 3.4299 3 3.874V20c0 .5523.4477 1 1 1s1-.4477 1-1v-7.126c1.7252-.4441 3-2.0102 3-3.874V4c0-.5523-.4477-1-1-1s-1 .4477-1 1v5c0 1.1046-.8954 2-2 2s-2-.8954-2-2z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /><path fill="currentColor" d="M8 4c0-.5523-.4477-1-1-1s-1 .4477-1 1v5c0 .5523.4477 1 1 1s1-.4477 1-1z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(ForkSpoonFilledIcon);
export default createLucideIcon('ForkSpoonFilledIcon', ForwardRef);
