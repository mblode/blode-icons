import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const BubbleWideAnnotationIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinejoin="round" strokeWidth={2} d="M3.002 7c0-1.6568 1.3431-3 3-3h11.9999c1.6569 0 3.0001 1.3431 3.0001 3v8.0358c0 1.6568-1.3432 2.9999-3 3h-2.6263a1 1 0 0 0-.638.2299l-2.74 2.2701-2.7037-2.2664a1 1 0 0 0-.6424-.2336H6.0019c-1.6568 0-3-1.3432-3-3z" /><path fill="currentColor" stroke="currentColor" strokeLinecap="square" strokeWidth={0.75} d="M6.625 11a.875.875 0 1 0 1.75 0 .875.875 0 0 0-1.75 0Zm4.5 0a.875.875 0 1 0 1.7501-.0001A.875.875 0 0 0 11.125 11Zm4.5 0a.875.875 0 1 0 1.7501-.0001A.875.875 0 0 0 15.625 11Z" style={{
    fill: "currentColor",
    fillOpacity: 1,
    stroke: "currentColor",
    strokeOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(BubbleWideAnnotationIcon);
export default createLucideIcon('BubbleWideAnnotationIcon', ForwardRef);
