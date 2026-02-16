import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const AirpodCaseIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" strokeWidth={2} d="M20 10V7.5C20 5.567 18.433 4 16.5 4h-9C5.567 4 4 5.567 4 7.5V10m16 0v6.5c0 1.933-1.567 3.5-3.5 3.5h-9C5.567 20 4 18.433 4 16.5V10m16 0H4" /><path fill="currentColor" stroke="currentColor" strokeLinecap="square" strokeWidth={0.75} d="M11.125 14.25a.875.875 0 1 0 1.7501-.0001.875.875 0 0 0-1.7501.0001Z" style={{
    fill: "currentColor",
    fillOpacity: 1,
    stroke: "currentColor",
    strokeOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(AirpodCaseIcon);
export default ForwardRef;
