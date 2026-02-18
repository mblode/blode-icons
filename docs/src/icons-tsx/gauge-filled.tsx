import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const GaugeFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M12 2c-.5523 0-1 .4477-1 1v2c0 .5523.4477 1 1 1s1-.4477 1-1v-.9381c3.9463.492 7 3.8585 7 7.9381 0 4.4183-3.5817 8-8 8s-8-3.5817-8-8c0-.9368.1606-1.834.455-2.6668.184-.5207-.089-1.092-.6096-1.276-.5208-.184-1.092.0888-1.2761.6096C2.2003 9.7106 2 10.833 2 12c0 5.5228 4.4772 10 10 10s10-4.4772 10-10S17.5228 2 12 2" /><path fill="currentColor" d="M5.0429 5.0429c.3905-.3905 1.0237-.3905 1.4142 0l3.8778 3.8778A3.484 3.484 0 0 1 12 8.5c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5c0-.6028.1524-1.1699.4207-1.6651L5.0429 6.4571c-.3905-.3905-.3905-1.0237 0-1.4142" /></svg>;
const ForwardRef = forwardRef(GaugeFilledIcon);
export default createLucideIcon('GaugeFilledIcon', ForwardRef);
