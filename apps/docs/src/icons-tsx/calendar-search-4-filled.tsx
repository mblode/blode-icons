import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CalendarSearch4FilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M10 12c0-.9665.7835-1.75 1.75-1.75s1.75.7835 1.75 1.75-.7835 1.75-1.75 1.75S10 12.9665 10 12" /><path fill="currentColor" fillRule="evenodd" d="M8 2c.5523 0 1 .4477 1 1v1h6V3c0-.5523.4477-1 1-1s1 .4477 1 1v1c2.2091 0 4 1.7909 4 4v9c0 2.2091-1.7909 4-4 4H7c-2.2091 0-4-1.7909-4-4V8c0-2.2091 1.7909-4 4-4V3c0-.5523.4477-1 1-1m3.75 6.25C9.679 8.25 8 9.929 8 12c0 2.0711 1.679 3.75 3.75 3.75a3.73 3.73 0 0 0 1.849-.4868l.6939.6939c.3905.3905 1.0237.3905 1.4142 0s.3905-1.0237 0-1.4142l-.6939-.6939A3.73 3.73 0 0 0 15.5 12c0-2.071-1.6789-3.75-3.75-3.75" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(CalendarSearch4FilledIcon);
export default createLucideIcon('CalendarSearch4FilledIcon', ForwardRef);
