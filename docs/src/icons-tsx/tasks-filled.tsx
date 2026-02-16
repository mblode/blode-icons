import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const TasksFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M3 7c0-2.2091 1.7909-4 4-4h10c2.2091 0 4 1.7909 4 4v10c0 2.2091-1.7909 4-4 4H7c-2.2091 0-4-1.7909-4-4zm8 2.5c0-.5523.4477-1 1-1h4c.5523 0 1 .4477 1 1s-.4477 1-1 1h-4c-.5523 0-1-.4477-1-1m1 4c-.5523 0-1 .4477-1 1s.4477 1 1 1h4c.5523 0 1-.4477 1-1s-.4477-1-1-1zm-2.5-4c0 .6904-.5596 1.25-1.25 1.25S7 10.1904 7 9.5s.5596-1.25 1.25-1.25S9.5 8.8096 9.5 9.5m-1.25 6.25c.6904 0 1.25-.5596 1.25-1.25s-.5596-1.25-1.25-1.25S7 13.8096 7 14.5s.5596 1.25 1.25 1.25" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(TasksFilledIcon);
export default ForwardRef;
