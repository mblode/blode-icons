import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Key2Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.4 8.5h.2m.4 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" style={{
    stroke: "currentColor",
    strokeOpacity: 1
  }} /><path stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" strokeWidth={2} d="M15.5 14c3.0376 0 5.5-2.4624 5.5-5.5S18.5376 3 15.5 3 10 5.4624 10 8.5c0 .461.0567.9086.1635 1.3365l-5.2848 5.2848A3 3 0 0 0 4 17.2426V19c0 .5523.4477 1 1 1h1.7574a3 3 0 0 0 2.1213-.8787L10 18v-2.5h2.5l1.6635-1.6635A5.5 5.5 0 0 0 15.5 14Z" style={{
    stroke: "currentColor",
    strokeOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(Key2Icon);
export default ForwardRef;
