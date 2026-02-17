import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CircleRecordFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M7.5 12c0 .5523.4477 1 1 1s1-.4477 1-1-.4477-1-1-1-1 .4477-1 1M15.5 13c-.5523 0-1-.4477-1-1s.4477-1 1-1 1 .4477 1 1-.4477 1-1 1" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /><path fill="currentColor" fillRule="evenodd" d="M2 12C2 6.4772 6.4772 2 12 2s10 4.4772 10 10-4.4772 10-10 10S2 17.5228 2 12m10.6707 1a3 3 0 0 1-.1707-1c0-1.6569 1.3431-3 3-3s3 1.3431 3 3-1.3431 3-3 3h-7c-1.6569 0-3-1.3431-3-3s1.3431-3 3-3 3 1.3431 3 3c0 .3506-.0602.6872-.1707 1z" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(CircleRecordFilledIcon);
export default createLucideIcon('CircleRecordFilledIcon', ForwardRef);
