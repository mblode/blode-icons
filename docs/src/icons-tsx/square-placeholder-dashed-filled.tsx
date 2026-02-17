import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SquarePlaceholderDashedFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M3 6.5C3 4.567 4.567 3 6.5 3c.5523 0 1 .4477 1 1s-.4477 1-1 1C5.6716 5 5 5.6716 5 6.5c0 .5523-.4477 1-1 1s-1-.4477-1-1M9.5 4c0-.5523.4477-1 1-1h3c.5523 0 1 .4477 1 1s-.4477 1-1 1h-3c-.5523 0-1-.4477-1-1m7 0c0-.5523.4477-1 1-1C19.433 3 21 4.567 21 6.5c0 .5523-.4477 1-1 1s-1-.4477-1-1c0-.8284-.6716-1.5-1.5-1.5-.5523 0-1-.4477-1-1M4 9.5c.5523 0 1 .4477 1 1v3c0 .5523-.4477 1-1 1s-1-.4477-1-1v-3c0-.5523.4477-1 1-1m16 0c.5523 0 1 .4477 1 1v3c0 .5523-.4477 1-1 1s-1-.4477-1-1v-3c0-.5523.4477-1 1-1m-16 7c.5523 0 1 .4477 1 1 0 .8284.6716 1.5 1.5 1.5.5523 0 1 .4477 1 1s-.4477 1-1 1C4.567 21 3 19.433 3 17.5c0-.5523.4477-1 1-1m16 0c.5523 0 1 .4477 1 1 0 1.933-1.567 3.5-3.5 3.5-.5523 0-1-.4477-1-1s.4477-1 1-1c.8284 0 1.5-.6716 1.5-1.5 0-.5523.4477-1 1-1M9.5 20c0-.5523.4477-1 1-1h3c.5523 0 1 .4477 1 1s-.4477 1-1 1h-3c-.5523 0-1-.4477-1-1" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /><path fill="currentColor" d="M7 9c0-1.1046.8954-2 2-2h6c1.1046 0 2 .8954 2 2v6c0 1.1046-.8954 2-2 2H9c-1.1046 0-2-.8954-2-2z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(SquarePlaceholderDashedFilledIcon);
export default createLucideIcon('SquarePlaceholderDashedFilledIcon', ForwardRef);
