import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Wallet3Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" strokeWidth={2} d="M4 6.5V17c0 1.6569 1.3431 3 3 3h10c1.6569 0 3-1.3431 3-3v-5c0-1.6569-1.3431-3-3-3h-1M4 6.5C4 7.8807 5.1193 9 6.5 9H16M4 6.5C4 5.1193 5.1193 4 6.5 4H14c1.1046 0 2 .8954 2 2v3" /><path fill="currentColor" stroke="currentColor" strokeWidth={0.75} d="M15.5 15.375a.875.875 0 1 0-.0001-1.7501.875.875 0 0 0 .0001 1.7501Z" style={{
    fill: "currentColor",
    fillOpacity: 1,
    stroke: "currentColor",
    strokeOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(Wallet3Icon);
export default ForwardRef;
