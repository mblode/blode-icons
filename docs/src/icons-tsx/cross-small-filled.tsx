import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CrossSmallFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M7.1893 7.1893c.5858-.5857 1.5356-.5857 2.1214 0L12 9.8787l2.6893-2.6894c.5858-.5857 1.5356-.5857 2.1214 0s.5857 1.5356 0 2.1214L14.1213 12l2.6894 2.6893c.5857.5858.5857 1.5356 0 2.1214s-1.5356.5857-2.1214 0L12 14.1213l-2.6893 2.6894c-.5858.5857-1.5356.5857-2.1214 0s-.5857-1.5356 0-2.1214L9.8787 12 7.1893 9.3107c-.5857-.5858-.5857-1.5356 0-2.1214" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(CrossSmallFilledIcon);
export default ForwardRef;
