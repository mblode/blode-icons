import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CookiesFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M2 12C2 6.4772 6.4772 2 12 2c.3853 0 .7659.0218 1.1406.0644a1 1 0 0 1 .8792 1.1186A2.5 2.5 0 0 0 14 3.5c0 1.2663.9425 2.3142 2.1638 2.4777a1 1 0 0 1 .8585.8585C17.1858 8.0575 18.2337 9 19.5 9c.3094 0 .6035-.0557.8743-.1569a1 1 0 0 1 1.3191.691A10.02 10.02 0 0 1 22 12c0 5.5228-4.4772 10-10 10S2 17.5228 2 12m8-3.5c0 .8284-.6716 1.5-1.5 1.5S7 9.3284 7 8.5 7.6716 7 8.5 7s1.5.6716 1.5 1.5m4 3c0 .8284-.6716 1.5-1.5 1.5s-1.5-.6716-1.5-1.5.6716-1.5 1.5-1.5 1.5.6716 1.5 1.5m3 3.5c.5523 0 1-.4477 1-1s-.4477-1-1-1-1 .4477-1 1 .4477 1 1 1m-4 1.5c0 .8284-.6716 1.5-1.5 1.5s-1.5-.6716-1.5-1.5.6716-1.5 1.5-1.5 1.5.6716 1.5 1.5M7 15c.5523 0 1-.4477 1-1s-.4477-1-1-1-1 .4477-1 1 .4477 1 1 1" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(CookiesFilledIcon);
export default createLucideIcon('CookiesFilledIcon', ForwardRef);
