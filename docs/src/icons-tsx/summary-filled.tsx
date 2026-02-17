import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SummaryFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M4 5c.5523 0 1 .4477 1 1v8c0 1.1046.8954 2 2 2h10v-1a1 1 0 0 1 1.6247-.7809l2.5 2a1 1 0 0 1 0 1.5618l-2.5 2A1.0001 1.0001 0 0 1 17 19v-1H7c-2.2091 0-4-1.7909-4-4V6c0-.5523.4477-1 1-1m4 2c0-.5523.4477-1 1-1h8c.5523 0 1 .4477 1 1s-.4477 1-1 1H9c-.5523 0-1-.4477-1-1m0 5c0-.5523.4477-1 1-1h4c.5523 0 1 .4477 1 1s-.4477 1-1 1H9c-.5523 0-1-.4477-1-1" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(SummaryFilledIcon);
export default ForwardRef;
