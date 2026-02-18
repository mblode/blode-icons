import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const LineChart1FilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M5 4c0-.5523-.4477-1-1-1s-1 .4477-1 1v13c0 2.2091 1.7909 4 4 4h14c.5523 0 1-.4477 1-1s-.4477-1-1-1H7c-1.1046 0-2-.8954-2-2z" /><path fill="currentColor" d="M15 5c0-.5523-.4477-1-1-1s-1 .4477-1 1v11c0 .5523.4477 1 1 1s1-.4477 1-1zM10 11c0-.5523-.4477-1-1-1s-1 .4477-1 1v5c0 .5523.4477 1 1 1s1-.4477 1-1zM20 13c0-.5523-.4477-1-1-1s-1 .4477-1 1v3c0 .5523.4477 1 1 1s1-.4477 1-1z" /></svg>;
const ForwardRef = forwardRef(LineChart1FilledIcon);
export default createLucideIcon('LineChart1FilledIcon', ForwardRef);
