import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const WhiteboardIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><circle cx={7.5} cy={12} r={3.5} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} style={{
    stroke: "currentColor",
    strokeOpacity: 1
  }} /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m11.4918 19.2304 3.0864-4.8224c.1966-.3073.6456-.3073.8422 0l3.0864 4.8224c.213.3328-.026.7695-.4211.7695h-6.1728c-.3951 0-.6341-.4367-.4211-.7695M11.5 5.8113s3-2.7105 4.5-1.5c2.2353 1.804-2.5 4.0002-2 5s3.8431-1.157 5.5.4998c1 1 .3661 2.4017 0 3.5" style={{
    stroke: "currentColor",
    strokeOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(WhiteboardIcon);
export default ForwardRef;
