import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const MathMultiplicationFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M10.5 6.5c0-.8284.6716-1.5 1.5-1.5s1.5.6716 1.5 1.5S12.8284 8 12 8s-1.5-.6716-1.5-1.5M4 12c0-.5523.4477-1 1-1h14c.5523 0 1 .4477 1 1s-.4477 1-1 1H5c-.5523 0-1-.4477-1-1m6.5 5.5c0-.8284.6716-1.5 1.5-1.5s1.5.6716 1.5 1.5S12.8284 19 12 19s-1.5-.6716-1.5-1.5" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(MathMultiplicationFilledIcon);
export default ForwardRef;
