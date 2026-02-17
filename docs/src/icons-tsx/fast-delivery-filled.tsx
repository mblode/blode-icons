import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const FastDeliveryFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M3 7c0-2.2091 1.7909-4 4-4h10c2.2091 0 4 1.7909 4 4v10c0 2.2091-1.7909 4-4 4h-4c-.5523 0-1-.4477-1-1s.4477-1 1-1h4c1.1046 0 2-.8954 2-2V7c0-1.1046-.8954-2-2-2h-1v2c0 1.6569-1.3431 3-3 3h-2c-1.6569 0-3-1.3431-3-3V5H7c-1.1046 0-2 .8954-2 2v2c0 .5523-.4477 1-1 1s-1-.4477-1-1zm0 7c0-.5523.4477-1 1-1h4c.5523 0 1 .4477 1 1s-.4477 1-1 1H4c-.5523 0-1-.4477-1-1m-2 3c0-.5523.4477-1 1-1h4c.5523 0 1 .4477 1 1s-.4477 1-1 1H2c-.5523 0-1-.4477-1-1m2 3c0-.5523.4477-1 1-1h4c.5523 0 1 .4477 1 1s-.4477 1-1 1H4c-.5523 0-1-.4477-1-1" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(FastDeliveryFilledIcon);
export default createLucideIcon('FastDeliveryFilledIcon', ForwardRef);
