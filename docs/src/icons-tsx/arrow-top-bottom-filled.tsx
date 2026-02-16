import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ArrowTopBottomFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M17 3c.5523 0 1 .4477 1 1v14.0858l2.2929-2.2929c.3905-.3905 1.0237-.3905 1.4142 0s.3905 1.0237 0 1.4142l-2.9393 2.9393c-.9763.9764-2.5593.9764-3.5356 0l-2.9393-2.9393c-.3905-.3905-.3905-1.0237 0-1.4142s1.0237-.3905 1.4142 0L16 18.0858V4c0-.5523.4477-1 1-1M8 5.9142l2.2929 2.293c.3905.3904 1.0237.3904 1.4142 0 .3905-.3906.3905-1.0238 0-1.4143L8.7678 3.8535" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /><path fill="currentColor" d="M8.7678 3.8536c-.9763-.9764-2.5593-.9764-3.5356 0L2.293 6.7929c-.3905.3905-.3905 1.0237 0 1.4142s1.0237.3905 1.4142 0L6 5.9142V20c0 .5523.4477 1 1 1s1-.4477 1-1V5.9142l2.2929 2.293c.3905.3904 1.0237.3904 1.4142 0 .3905-.3906.3905-1.0238 0-1.4143z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(ArrowTopBottomFilledIcon);
export default ForwardRef;
