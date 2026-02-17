import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const TapeFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M7 12c0-.5523.4477-1 1-1s1 .4477 1 1-.4477 1-1 1-1-.4477-1-1M17 12c0 .5523-.4477 1-1 1s-1-.4477-1-1 .4477-1 1-1 1 .4477 1 1" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /><path fill="currentColor" fillRule="evenodd" d="M1 8c0-2.2091 1.7909-4 4-4h14c2.2091 0 4 1.7909 4 4v8c0 2.2091-1.7909 4-4 4H5c-2.2091 0-4-1.7909-4-4zm10 4c0 .3506-.0602.6872-.1707 1h2.3414A3 3 0 0 1 13 12c0-1.6569 1.3431-3 3-3s3 1.3431 3 3-1.3431 3-3 3H8c-1.6569 0-3-1.3431-3-3s1.3431-3 3-3 3 1.3431 3 3" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(TapeFilledIcon);
export default createLucideIcon('TapeFilledIcon', ForwardRef);
