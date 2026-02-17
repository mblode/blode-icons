import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Calender5FilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M7 3C4.7909 3 3 4.7909 3 7v1h18V7c0-2.2091-1.7909-4-4-4v1c0 .5523-.4477 1-1 1s-1-.4477-1-1V3H9v1c0 .5523-.4477 1-1 1s-1-.4477-1-1zM3 10h18v7c0 2.2091-1.7909 4-4 4H7c-2.2091 0-4-1.7909-4-4z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(Calender5FilledIcon);
export default createLucideIcon('Calender5FilledIcon', ForwardRef);
