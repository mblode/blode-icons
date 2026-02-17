import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const BubbleHeartFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M17.0019 3h-10c-2.209 0-4 1.7909-4 4v8.0358c0 2.2091 1.791 4 4 4h1.6497l2.7037 2.2663a1 1 0 0 0 1.2804.0037l2.74-2.27h1.6263c2.2091-.0001 4-1.7909 4-4V7c0-2.2091-1.7909-4-4.0001-4m-5.0025 11.2801c.2709 0 3.2513-1.5353 3.2513-3.6126 0-1.445-.9032-2.1675-1.8063-2.1675s-1.445.5419-1.445.5419S11.4575 8.5 10.5543 8.5s-1.8063.7225-1.8063 2.1675c0 2.0773 2.9804 3.6126 3.2514 3.6126" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(BubbleHeartFilledIcon);
export default ForwardRef;
