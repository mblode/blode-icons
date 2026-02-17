import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const PinCircleFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M11.9978 11a1.498 1.498 0 0 0 1.063-.4395c.5854-.585.5859-1.535-.0004-2.1213-.5856-.5856-1.535-.5857-2.1215.0004-.585.5844-.5856 1.5347.0006 2.1215A1.493 1.493 0 0 0 11.9978 11" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /><path fill="currentColor" fillRule="evenodd" d="M12 2C6.4772 2 2 6.4772 2 12s4.4772 10 10 10 10-4.4772 10-10S17.5228 2 12 2m1 10.8545a3.49 3.49 0 0 0 1.4744-.8792c1.3677-1.3665 1.3672-3.5833.0003-4.9503-1.3675-1.3676-3.5828-1.3657-4.9494-.0003-1.3682 1.3669-1.3657 3.5835-.0007 4.9499A3.48 3.48 0 0 0 11 12.8551V17c0 .5523.4477 1 1 1s1-.4477 1-1z" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(PinCircleFilledIcon);
export default createLucideIcon('PinCircleFilledIcon', ForwardRef);
