import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const BubbleDotsFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M7.002 3h9.9999c2.2092 0 4.0001 1.7909 4.0001 4v8.0358c0 2.2091-1.7909 3.9999-4 4h-1.6263l-2.74 2.27a1 1 0 0 1-1.2804-.0037l-2.7037-2.2663H7.0019c-2.209 0-4-1.7909-4-4V7c0-2.2091 1.791-4 4-4m-.5022 8.25c0 .6904.5596 1.25 1.25 1.25s1.25-.5596 1.25-1.25S8.44 10 7.7498 10s-1.25.5596-1.25 1.25m4.25 0c0 .6904.5596 1.25 1.25 1.25s1.25-.5596 1.25-1.25-.5597-1.25-1.25-1.25-1.25.5596-1.25 1.25m5.5 1.25c-.6904 0-1.25-.5596-1.25-1.25s.5596-1.25 1.25-1.25 1.25.5596 1.25 1.25-.5597 1.25-1.25 1.25" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(BubbleDotsFilledIcon);
export default ForwardRef;
