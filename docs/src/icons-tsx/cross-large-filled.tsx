import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CrossLargeFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M4.1893 4.1893c.5858-.5858 1.5356-.5858 2.1214 0L12 9.8787l5.6893-5.6894c.5858-.5858 1.5356-.5858 2.1214 0s.5857 1.5356 0 2.1214L14.1213 12l5.6894 5.6893c.5857.5858.5857 1.5356 0 2.1214s-1.5356.5857-2.1214 0L12 14.1213l-5.6893 5.6894c-.5858.5857-1.5356.5857-2.1214 0s-.5858-1.5356 0-2.1214L9.8787 12 4.1893 6.3107c-.5858-.5858-.5858-1.5356 0-2.1214" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(CrossLargeFilledIcon);
export default ForwardRef;
