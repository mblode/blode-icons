import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const NewspaperFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M8 11V9h3v2z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /><path fill="currentColor" fillRule="evenodd" d="M2 7c0-2.2091 1.7909-4 4-4h7c2.2091 0 4 1.7909 4 4v4h1.5c1.933 0 3.5 1.567 3.5 3.5v3c0 1.933-1.567 3.5-3.5 3.5h-13C3.567 21 2 19.433 2 17.5zm16.5 12c.8284 0 1.5-.6716 1.5-1.5v-3c0-.8284-.6716-1.5-1.5-1.5H17v4.5c0 .8284.6716 1.5 1.5 1.5M6 16c0-.5523.4477-1 1-1h5c.5523 0 1 .4477 1 1s-.4477 1-1 1H7c-.5523 0-1-.4477-1-1m1-9c-.5523 0-1 .4477-1 1v4c0 .5523.4477 1 1 1h5c.5523 0 1-.4477 1-1V8c0-.5523-.4477-1-1-1z" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(NewspaperFilledIcon);
export default createLucideIcon('NewspaperFilledIcon', ForwardRef);
