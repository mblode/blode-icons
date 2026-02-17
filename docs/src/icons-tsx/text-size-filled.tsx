import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const TextSizeFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M10 4c-.5523 0-1 .4477-1 1s.4477 1 1 1h5v14c0 .5523.4477 1 1 1s1-.4477 1-1V6h5c.5523 0 1-.4477 1-1s-.4477-1-1-1z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /><path fill="currentColor" d="M5.9268 20v-8H2c-.5523 0-1-.4477-1-1s.4477-1 1-1h4.8822a1 1 0 0 1 .0892 0H12c.5523 0 1 .4477 1 1s-.4477 1-1 1H7.9268v8c0 .5523-.4478 1-1 1s-1-.4477-1-1" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(TextSizeFilledIcon);
export default createLucideIcon('TextSizeFilledIcon', ForwardRef);
