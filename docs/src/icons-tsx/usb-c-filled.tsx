import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const UsbCFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M0 12c0-3.3137 2.6863-6 6-6h12c3.3137 0 6 2.6863 6 6s-2.6863 6-6 6H6c-3.3137 0-6-2.6863-6-6m6-1c-.5523 0-1 .4477-1 1s.4477 1 1 1h12c.5523 0 1-.4477 1-1s-.4477-1-1-1z" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(UsbCFilledIcon);
export default ForwardRef;
