import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CalenderAddFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M9 3c0-.5523-.4477-1-1-1s-1 .4477-1 1v1C4.7909 4 3 5.7909 3 8v9c0 2.2091 1.7909 4 4 4h4c.5523 0 1-.4477 1-1s-.4477-1-1-1H7c-1.1046 0-2-.8954-2-2v-7h14v1c0 .5523.4477 1 1 1s1-.4477 1-1V8c0-2.2091-1.7909-4-4-4V3c0-.5523-.4477-1-1-1s-1 .4477-1 1v1H9z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /><path fill="currentColor" d="M19 15c0-.5523-.4477-1-1-1s-1 .4477-1 1v2h-2c-.5523 0-1 .4477-1 1s.4477 1 1 1h2v2c0 .5523.4477 1 1 1s1-.4477 1-1v-2h2c.5523 0 1-.4477 1-1s-.4477-1-1-1h-2z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(CalenderAddFilledIcon);
export default ForwardRef;
