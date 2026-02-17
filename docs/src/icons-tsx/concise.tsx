import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ConciseIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 10h16m0 4H4M9.5 20l2.5-2.5 2.5 2.5M14.5 4 12 6.5 9.5 4" style={{
    stroke: "currentColor",
    strokeOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(ConciseIcon);
export default ForwardRef;
