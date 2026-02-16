import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const FullScreenIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 4H7C5.3431 4 4 5.3431 4 7v1m12-4h1c1.6569 0 3 1.3431 3 3v1m0 8v1c0 1.6569-1.3431 3-3 3h-1m-8 0H7c-1.6569 0-3-1.3431-3-3v-1" style={{
    stroke: "currentColor",
    strokeOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(FullScreenIcon);
export default ForwardRef;
