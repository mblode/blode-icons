import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const BreakfastIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeWidth={2} d="M21 12.1979c0 5.0799-.1798 9.4429-6.3721 7.8021-1.9606-.5195-4.2532 1.1034-5.8819 1C.842 20.4984.7402 3 10.6432 3c5.5859 0 4.0135 2.7172 5.5859 4.599C17.5889 9.2263 21 7.599 21 12.1979Z" style={{
    stroke: "currentColor",
    strokeOpacity: 1
  }} /><circle cx={11} cy={13} r={3} stroke="currentColor" strokeWidth={2} style={{
    stroke: "currentColor",
    strokeOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(BreakfastIcon);
export default ForwardRef;
