import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const DropFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M13.9821 2.8495c-1.0957-1.1275-2.8685-1.1275-3.9642 0-1.0331 1.063-2.5176 2.7288-3.7498 4.661C5.0495 9.4213 4 11.7119 4 14c0 4.4182 3.5817 8 8 8s8-3.5818 8-8c0-2.2881-1.0495-4.5787-2.2681-6.4895-1.2322-1.9322-2.7167-3.598-3.7498-4.661" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(DropFilledIcon);
export default ForwardRef;
