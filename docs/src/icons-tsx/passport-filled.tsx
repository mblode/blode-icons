import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const PassportFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M10.5 10.5c0-.8284.6716-1.5 1.5-1.5s1.5.6716 1.5 1.5S12.8284 12 12 12s-1.5-.6716-1.5-1.5" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /><path fill="currentColor" fillRule="evenodd" d="M7.5 2.5c-2.2091 0-4 1.7909-4 4v11c0 2.2091 1.7909 4 4 4h9c2.2091 0 4-1.7909 4-4v-11c0-2.2091-1.7909-4-4-4zm1 13.5c0-.5523.4477-1 1-1h5c.5523 0 1 .4477 1 1s-.4477 1-1 1h-5c-.5523 0-1-.4477-1-1M12 7c-1.933 0-3.5 1.567-3.5 3.5S10.067 14 12 14s3.5-1.567 3.5-3.5S13.933 7 12 7" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(PassportFilledIcon);
export default ForwardRef;
