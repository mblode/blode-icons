import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const AirplaneIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16.3284 4.1716 13.5 7 6.7829 4.6293a3 3 0 0 0-3.1198.7076L3 6l6.5 5-2 2h-.7574a3 3 0 0 0-2.1213.8787L3 15.5l2.7232 1.0212a3 3 0 0 1 1.7556 1.7556L8.5 21l1.6213-1.6213A3 3 0 0 0 11 17.2574V16.5l2-2 5 6.5.6631-.6631a3 3 0 0 0 .7076-3.1198L17 10.5l2.8284-2.8284A4 4 0 0 0 21 4.8432V3h-1.8431a4 4 0 0 0-2.8285 1.1716" style={{
    stroke: "currentColor",
    strokeOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(AirplaneIcon);
export default ForwardRef;
