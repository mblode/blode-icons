import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Bell2SnoozeFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M4.7016 8.9426C4.8961 5.0535 8.106 2 12 2s7.1039 3.0535 7.2984 6.9426l.1689 3.3787a2 2 0 0 0 .2087.7946l1.133 2.2661c.1256.2512.191.5281.191.809 0 .9991-.8099 1.809-1.809 1.809H16.9c-.4633 2.2822-2.481 4-4.9 4s-4.4367-1.7178-4.9-4H4.809C3.81 18 3 17.1901 3 16.191c0-.2809.0654-.5578.191-.809l1.133-2.2661a2 2 0 0 0 .2087-.7946zM9.1707 18c.4118 1.1652 1.5231 2 2.8293 2s2.4175-.8348 2.8293-2zM10.5 7.5c-.5523 0-1 .4477-1 1s.4477 1 1 1h1l-1.8 2.4a1 1 0 0 0 .8 1.6h3c.5523 0 1-.4477 1-1s-.4477-1-1-1h-1l1.8-2.4a.9999.9999 0 0 0-.8-1.6z" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(Bell2SnoozeFilledIcon);
export default createLucideIcon('Bell2SnoozeFilledIcon', ForwardRef);
