import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const MouseFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M5 9c0-3.866 3.134-7 7-7s7 3.134 7 7v6c0 3.866-3.134 7-7 7s-7-3.134-7-7zm8-2c0-.5523-.4477-1-1-1s-1 .4477-1 1v2c0 .5523.4477 1 1 1s1-.4477 1-1z" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(MouseFilledIcon);
export default createLucideIcon('MouseFilledIcon', ForwardRef);
