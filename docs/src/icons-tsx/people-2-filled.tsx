import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const People2FilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M6.5 7.5C6.5 4.4624 8.9624 2 12 2s5.5 2.4624 5.5 5.5S15.0376 13 12 13s-5.5-2.4624-5.5-5.5M4 21c-.5523 0-1-.4477-1-1v-1c0-2.7614 2.2386-5 5-5h8c2.7614 0 5 2.2386 5 5v1c0 .5523-.4477 1-1 1z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(People2FilledIcon);
export default ForwardRef;
