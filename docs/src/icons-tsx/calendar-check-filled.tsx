import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CalendarCheckFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M9 3c0-.5523-.4477-1-1-1s-1 .4477-1 1v1C4.7909 4 3 5.7909 3 8v9c0 2.2091 1.7909 4 4 4h4c.5523 0 1-.4477 1-1s-.4477-1-1-1H7c-1.1046 0-2-.8954-2-2v-7h14v2c0 .5523.4477 1 1 1s1-.4477 1-1V8c0-2.2091-1.7909-4-4-4V3c0-.5523-.4477-1-1-1s-1 .4477-1 1v1H9z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /><path fill="currentColor" d="M21.7809 16.6247c.345-.4313.2751-1.0606-.1562-1.4056s-1.0606-.2751-1.4056.1562l-3.302 4.1276-1.21-1.21c-.3905-.3905-1.0237-.3905-1.4142 0s-.3905 1.0237 0 1.4142l2 2a1 1 0 0 0 1.488-.0824z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(CalendarCheckFilledIcon);
export default ForwardRef;
