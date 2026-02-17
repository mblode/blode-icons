import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const GamepadFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M8 5c-3.866 0-7 3.134-7 7s3.134 7 7 7h8c3.866 0 7-3.134 7-7s-3.134-7-7-7zm8.5 5.5c0 .6904.5596 1.25 1.25 1.25S19 11.1904 19 10.5s-.5596-1.25-1.25-1.25-1.25.5596-1.25 1.25m-3 3c0 .6904.5596 1.25 1.25 1.25S16 14.1904 16 13.5s-.5596-1.25-1.25-1.25-1.25.5596-1.25 1.25M9 10c0-.5523-.4477-1-1-1s-1 .4477-1 1v1H6c-.5523 0-1 .4477-1 1s.4477 1 1 1h1v1c0 .5523.4477 1 1 1s1-.4477 1-1v-1h1c.5523 0 1-.4477 1-1s-.4477-1-1-1H9z" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(GamepadFilledIcon);
export default ForwardRef;
