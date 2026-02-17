import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const RaisingHand4FingerIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.5 11V6.75C8.5 5.7835 7.7165 5 6.75 5S5 5.7835 5 6.75V14c0 3.866 3.134 7 7 7s7-3.134 7-7V9c0-.5523-.4477-1-1-1v0c-1.6569 0-3 1.3431-3 3v.8377a.919.919 0 0 1-.6283.8717v0A3.469 3.469 0 0 0 12 16m-3.5-6V4.75c0-.9665.7835-1.75 1.75-1.75S12 3.7835 12 4.75v1m0 0c0-.9665.7835-1.75 1.75-1.75s1.75.7835 1.75 1.75v3.5911M12 5.75V9" /></svg>;
const ForwardRef = forwardRef(RaisingHand4FingerIcon);
export default createLucideIcon('RaisingHand4FingerIcon', ForwardRef);
