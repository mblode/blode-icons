import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const VoiceRecordIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><circle cx={16.5} cy={15.5} r={4.5} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} style={{
    stroke: "currentColor",
    strokeOpacity: 1
  }} /><circle cx={16.5} cy={15.5} r={2.5} fill="currentColor" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.004 9v2m3.5-7v12m3.4999-9v3m3.5-5v2.5" style={{
    stroke: "currentColor",
    strokeOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(VoiceRecordIcon);
export default createLucideIcon('VoiceRecordIcon', ForwardRef);
