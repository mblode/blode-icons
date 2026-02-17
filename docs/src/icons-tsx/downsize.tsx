import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const DownsizeIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 9h2c1.6569 0 3-1.3431 3-3V4M20 9h-2c-1.6569 0-3-1.3431-3-3V4M15 20v-2c0-1.6569 1.3431-3 3-3h2M4 15h2c1.6569 0 3 1.3431 3 3v2" style={{
    stroke: "currentColor",
    strokeOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(DownsizeIcon);
export default ForwardRef;
