import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ThermostatFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M15 4c0-.5523.4477-1 1-1h3c.5523 0 1 .4477 1 1s-.4477 1-1 1h-3c-.5523 0-1-.4477-1-1m0 4c0-.5523.4477-1 1-1h3c.5523 0 1 .4477 1 1s-.4477 1-1 1h-3c-.5523 0-1-.4477-1-1m0 4c0-.5523.4477-1 1-1h3c.5523 0 1 .4477 1 1s-.4477 1-1 1h-3c-.5523 0-1-.4477-1-1" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /><path fill="currentColor" d="M11 4c0-1.1046-.8954-2-2-2s-2 .8954-2 2v8.416c-1.7659.7716-3 2.5337-3 4.584 0 2.7614 2.2386 5 5 5s5-2.2386 5-5c0-2.0503-1.2341-3.8124-3-4.584z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(ThermostatFilledIcon);
export default ForwardRef;
