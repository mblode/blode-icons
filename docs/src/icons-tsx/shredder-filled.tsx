import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ShredderFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M8 2C5.7909 2 4 3.7908 4 6v4h16V6c0-2.2092-1.7909-4-4-4zM3 12c-.5523 0-1 .4477-1 1s.4477 1 1 1h18c.5523 0 1-.4477 1-1s-.4477-1-1-1zM7 17c0-.5523-.4477-1-1-1s-1 .4477-1 1v2c0 .5523.4477 1 1 1s1-.4477 1-1zM11 17c0-.5523-.4477-1-1-1s-1 .4477-1 1v4c0 .5523.4477 1 1 1s1-.4477 1-1zM15 17c0-.5523-.4477-1-1-1s-1 .4477-1 1v2c0 .5523.4477 1 1 1s1-.4477 1-1zM19 17c0-.5523-.4477-1-1-1s-1 .4477-1 1v4c0 .5523.4477 1 1 1s1-.4477 1-1z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(ShredderFilledIcon);
export default ForwardRef;
