import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const DevicesFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M17 17.5c-.5523 0-1 .4477-1 1s.4477 1 1 1h1c.5523 0 1-.4477 1-1s-.4477-1-1-1z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /><path fill="currentColor" fillRule="evenodd" d="M7 3C4.7909 3 3 4.7909 3 7v8H2c-.5523 0-1 .4477-1 1v1c0 2.2091 1.7909 4 4 4h8.3542c.7051.6224 1.6314 1 2.6458 1h3c2.2091 0 4-1.7909 4-4v-6c0-1.4806-.8044-2.7733-2-3.4649V7c0-2.2091-1.7909-4-4-4zm12 7h-3c-1.1046 0-2 .8954-2 2v6c0 1.1046.8954 2 2 2h3c1.1046 0 2-.8954 2-2v-6c0-1.1046-.8954-2-2-2m-7 7H3c0 1.1046.8954 2 2 2h7.126A4 4 0 0 1 12 18z" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(DevicesFilledIcon);
export default ForwardRef;
