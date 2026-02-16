import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ChromecastFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M6 3C3.7909 3 2 4.7909 2 7v.0379Q2.4951 7 3 7c7.1797 0 13 5.8203 13 13q-.0001.5049-.0379 1H18c2.2091 0 4-1.7909 4-4V7c0-2.2091-1.7909-4-4-4zM3 13c-.5523 0-1 .4477-1 1s.4477 1 1 1c2.7614 0 5 2.2386 5 5 0 .5523.4477 1 1 1s1-.4477 1-1c0-3.866-3.134-7-7-7" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /><path fill="currentColor" d="M2 10c0-.5523.4477-1 1-1 6.0751 0 11 4.9249 11 11 0 .5523-.4477 1-1 1s-1-.4477-1-1c0-4.9706-4.0294-9-9-9-.5523 0-1-.4477-1-1M3 17c-.5523 0-1 .4477-1 1s.4477 1 1 1 1 .4477 1 1 .4477 1 1 1 1-.4477 1-1c0-1.6569-1.3431-3-3-3" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(ChromecastFilledIcon);
export default ForwardRef;
