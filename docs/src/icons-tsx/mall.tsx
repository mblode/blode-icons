import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const MallIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeWidth={2} d="M8 19H6c-1.6569 0-3-1.3431-3-3V8c0-1.6569 1.3431-3 3-3h12c1.6569 0 3 1.3431 3 3v8c0 1.6569-1.3431 3-3 3h-2m-8 0v-5c0-1.6569 1.3431-3 3-3h1m-4 8h4m4 0v-5c0-1.6569-1.3431-3-3-3h-1m4 8h-4m0-8v8" style={{
    stroke: "currentColor",
    strokeOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(MallIcon);
export default ForwardRef;
