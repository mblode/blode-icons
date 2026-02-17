import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const TextMotionFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M15.5 4a1 1 0 0 1 .9308.6344l5.5 13.9999c.2019.5141-.0511 1.0945-.5651 1.2965s-1.0945-.0511-1.2965-.5651L18.3542 15h-5.7084l-1.715 4.3657c-.202.514-.7824.767-1.2965.5651-.514-.202-.767-.7824-.565-1.2965l5.4999-14A1 1 0 0 1 15.5 4m-2.0685 9h4.137L15.5 7.7348zM5 7c0-.5523.4477-1 1-1h4c.5523 0 1 .4477 1 1s-.4477 1-1 1H6c-.5523 0-1-.4477-1-1m-3 5c0-.5523.4477-1 1-1h5c.5523 0 1 .4477 1 1s-.4477 1-1 1H3c-.5523 0-1-.4477-1-1m1 5c0-.5523.4477-1 1-1h2c.5523 0 1 .4477 1 1s-.4477 1-1 1H4c-.5523 0-1-.4477-1-1" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(TextMotionFilledIcon);
export default createLucideIcon('TextMotionFilledIcon', ForwardRef);
