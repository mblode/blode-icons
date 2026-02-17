import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const WritingFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M20.2071 3.7929c-1.219-1.219-3.1952-1.219-4.4142 0l-3.6213 3.6213A4 4 0 0 0 11 10.2426V12a1 1 0 0 0 1 1h1.7573a4 4 0 0 0 2.8285-1.1716l3.6213-3.6213c1.219-1.219 1.219-3.1953 0-4.4143" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /><path fill="currentColor" d="M6 11c-1.6569 0-3 1.3432-3 3s1.3431 3 3 3h10c.5523 0 1 .4478 1 1s-.4477 1-1 1h-4c-.5523 0-1 .4478-1 1s.4477 1 1 1h4c1.6569 0 3-1.3431 3-3s-1.3431-3-3-3H6c-.5523 0-1-.4477-1-1s.4477-1 1-1h2c.5523 0 1-.4477 1-1s-.4477-1-1-1z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(WritingFilledIcon);
export default ForwardRef;
