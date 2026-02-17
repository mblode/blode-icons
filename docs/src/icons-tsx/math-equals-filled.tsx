import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const MathEqualsFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M4 9c0-.5523.4477-1 1-1h14c.5523 0 1 .4477 1 1s-.4477 1-1 1H5c-.5523 0-1-.4477-1-1m0 6c0-.5523.4477-1 1-1h14c.5523 0 1 .4477 1 1s-.4477 1-1 1H5c-.5523 0-1-.4477-1-1" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(MathEqualsFilledIcon);
export default ForwardRef;
