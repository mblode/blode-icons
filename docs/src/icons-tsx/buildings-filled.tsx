import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const BuildingsFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M3 7c0-2.2091 1.7909-4 4-4h4c2.2091 0 4 1.7909 4 4h2c2.2091 0 4 1.7909 4 4v7h1c.5523 0 1 .4477 1 1s-.4477 1-1 1H2c-.5523 0-1-.4477-1-1s.4477-1 1-1h1zm12 11h4v-7c0-1.1046-.8954-2-2-2h-2zM7 9c0-.5523.4477-1 1-1h2c.5523 0 1 .4477 1 1s-.4477 1-1 1H8c-.5523 0-1-.4477-1-1m0 4c0-.5523.4477-1 1-1h2c.5523 0 1 .4477 1 1s-.4477 1-1 1H8c-.5523 0-1-.4477-1-1" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(BuildingsFilledIcon);
export default ForwardRef;
