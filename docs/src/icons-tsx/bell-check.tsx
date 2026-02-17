import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const BellCheckIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5807 9.4347C5.1082 5.7425 8.2703 3 12 3s6.8918 2.7425 7.4192 6.4347l.5916 4.141C20.269 15.383 18.8666 17 17.0409 17H6.959c-1.8256 0-3.228-1.617-2.9698-3.4243zM16 17c0 2.2091-1.7909 4-4 4s-4-1.7909-4-4" style={{
    stroke: "currentColor",
    strokeOpacity: 1
  }} /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m9.5 11 1.5 1.5L14.5 9" style={{
    stroke: "currentColor",
    strokeOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(BellCheckIcon);
export default ForwardRef;
