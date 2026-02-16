import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ShareArrowDownIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14.5V2m0 12.5L8.5 11m3.5 3.5 3.5-3.5M17 5c1.6569 0 3 1.3431 3 3v9c0 1.6569-1.3431 3-3 3H7c-1.6569 0-3-1.3431-3-3V8c0-1.6569 1.3431-3 3-3" style={{
    stroke: "currentColor",
    strokeOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(ShareArrowDownIcon);
export default ForwardRef;
