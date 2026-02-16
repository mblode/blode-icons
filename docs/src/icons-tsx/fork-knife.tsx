import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ForkKnifeIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 4v6.1716c0 1.3343 1.5 1.8225 1.5 3.1568V18.5c0 .8284.6716 1.5 1.5 1.5s1.5-.6716 1.5-1.5v-5.1716c0-1.3343 1.5-1.8225 1.5-3.1568V4M8 4v5M19 18.5V4c-.895 0-4.0906 2.4696-4.9823 8.9027C13.8605 14.037 14.7698 15 15.8997 15h.1412v3.5c0 .8284.6624 1.5 1.4795 1.5S19 19.3284 19 18.5" style={{
    stroke: "currentColor",
    strokeOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(ForkKnifeIcon);
export default ForwardRef;
