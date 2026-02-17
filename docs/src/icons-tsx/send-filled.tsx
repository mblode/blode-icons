import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SendFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M20.9061 6.2056c.5721-1.907-1.2059-3.685-3.1129-3.113L2.8676 7.5703c-2.3919.7176-2.3696 4.1123.0315 4.7984l6.5237 1.8639a.5.5 0 0 1 .3434.3434l1.8638 6.5236c.6861 2.4011 4.0809 2.4234 4.7984.0315z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(SendFilledIcon);
export default ForwardRef;
