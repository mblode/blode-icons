import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const MapPinFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M4 10c0-4.4183 3.5817-8 8-8s8 3.5817 8 8c0 2.2654-.9175 4.37-2.0454 6.1115-1.1327 1.7487-2.5268 3.2075-3.5966 4.2015-1.3431 1.248-3.3729 1.248-4.716 0-1.0698-.9941-2.464-2.4528-3.5966-4.2015C4.9174 14.37 4 12.2654 4 10m7.9978 2.5c1.3807 0 2.5-1.1193 2.5-2.5s-1.1193-2.5-2.5-2.5-2.5 1.1193-2.5 2.5 1.1193 2.5 2.5 2.5" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(MapPinFilledIcon);
export default createLucideIcon('MapPinFilledIcon', ForwardRef);
