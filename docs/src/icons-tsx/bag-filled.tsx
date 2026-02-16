import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const BagFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M7.0022 7V6c0-1.6569 1.3431-3 3-3h4c1.6569 0 3 1.3431 3 3v1H18c2.2091 0 4 1.7909 4 4v.9332a1 1 0 0 1 .0022.0668H2.0004L2 11c0-2.2091 1.7909-4 4-4zm2-1c0-.5523.4477-1 1-1h4c.5523 0 1 .4477 1 1v1h-6z" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /><path fill="currentColor" d="m2.0022 17-.0011-3h8.9996l.0015 2.0007c.0004.5523.4484.9997 1.0007.9993s.9997-.4484.9993-1.0007L13.0007 14h9.0015v3c0 2.2091-1.7909 4-4 4h-12c-2.2091 0-4-1.7909-4-4" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(BagFilledIcon);
export default ForwardRef;
