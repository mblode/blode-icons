import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const DashboardMiddleFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M2 12C2 6.4772 6.4772 2 12 2s10 4.4772 10 10a10 10 0 0 1-.4578 3H13V9c0-.5523-.4477-1-1-1s-1 .4477-1 1v6H2.4578A10 10 0 0 1 2 12M3.3378 17c1.729 2.989 4.9608 5 8.6622 5s6.9331-2.011 8.6622-5z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(DashboardMiddleFilledIcon);
export default ForwardRef;
