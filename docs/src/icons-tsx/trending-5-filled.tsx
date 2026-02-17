import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Trending5FilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M4 3c.5523 0 1 .4477 1 1v10.5858l2.5429-2.5429c1.0809-1.0809 2.8333-1.0809 3.9142 0a.768.768 0 0 0 1.0858 0l1.75-1.75c1.4951-1.4951 3.9191-1.4951 5.4142 0 .3905.3905.3905 1.0237 0 1.4142s-1.0237.3905-1.4142 0c-.7141-.714-1.8717-.714-2.5858 0l-1.75 1.75c-1.0809 1.0809-2.8333 1.0809-3.9142 0a.768.768 0 0 0-1.0858 0l-3.9213 3.9214C5.2126 18.3021 6.0248 19 7 19h13c.5523 0 1 .4477 1 1s-.4477 1-1 1H7c-2.2091 0-4-1.7909-4-4V4c0-.5523.4477-1 1-1" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(Trending5FilledIcon);
export default createLucideIcon('Trending5FilledIcon', ForwardRef);
