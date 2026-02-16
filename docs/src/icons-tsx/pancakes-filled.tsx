import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const PancakesFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M3 5c0-.5523.4477-1 1-1h16c.5523 0 1 .4477 1 1s-.4477 1-1 1h-5c-.5523 0-1 .4477-1 1v3.5c0 .8284-.6716 1.5-1.5 1.5s-1.5-.6716-1.5-1.5v4c0 .8284-.6716 1.5-1.5 1.5S8 15.3284 8 14.5V7c0-.5523-.4477-1-1-1H4c-.5523 0-1-.4477-1-1" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /><path fill="currentColor" d="M21 8.5c0-.5523-.4477-1-1-1h-4v2h4c.5523 0 1-.4477 1-1M15.9646 11c-.1114.7788-.4792 1.4749-1.0151 2H21c.5523 0 1-.4477 1-1s-.4477-1-1-1zM6 7.5H3c-.5523 0-1 .4477-1 1s.4477 1 1 1h3zM6 11H4c-.5523 0-1 .4477-1 1s.4477 1 1 1h2zM6 14.5H4c-.5523 0-1 .4477-1 1s.4477 1 1 1h2.6273A3.484 3.484 0 0 1 6 14.5M12.3727 16.5a3.484 3.484 0 0 0 .6273-2h7c.5523 0 1 .4477 1 1s-.4477 1-1 1zM23 19c0-.5523-.4477-1-1-1H2c-.5523 0-1 .4477-1 1s.4477 1 1 1h20c.5523 0 1-.4477 1-1" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(PancakesFilledIcon);
export default ForwardRef;
