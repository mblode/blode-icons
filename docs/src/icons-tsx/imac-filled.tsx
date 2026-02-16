import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ImacFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M6 3C3.7909 3 2 4.7909 2 7v5h20V7c0-2.2091-1.7909-4-4-4z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /><path fill="currentColor" fillRule="evenodd" d="M2 14h20c0 2.2091-1.7909 4-4 4h-3v3c0 .5523-.4477 1-1 1h-4c-.5523 0-1-.4477-1-1v-3H6c-2.2091 0-4-1.7909-4-4m9 4v2h2v-2z" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(ImacFilledIcon);
export default ForwardRef;
