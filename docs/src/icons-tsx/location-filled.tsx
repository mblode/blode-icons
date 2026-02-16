import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const LocationFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M18.1279 2.7804c1.8859-.5388 3.6294 1.2047 3.0906 3.0906l-2.8004 9.8014a4 4 0 0 1-2.7472 2.7472L5.8696 21.22c-1.886.5388-3.6295-1.2048-3.0907-3.0907L5.5793 8.328a4 4 0 0 1 2.7472-2.7472zM9.4987 12c0-1.3807 1.1193-2.5 2.5-2.5s2.5 1.1193 2.5 2.5-1.1193 2.5-2.5 2.5-2.5-1.1193-2.5-2.5" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(LocationFilledIcon);
export default ForwardRef;
