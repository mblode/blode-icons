import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ChevronTopIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m4 15 5.8787-5.8786c1.1715-1.1716 3.071-1.1716 4.2426 0L20 15" style={{
    stroke: "currentColor",
    strokeOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(ChevronTopIcon);
export default ForwardRef;
