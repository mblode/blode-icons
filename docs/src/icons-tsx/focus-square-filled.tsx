import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const FocusSquareFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M7 5c-1.1046 0-2 .8954-2 2v1c0 .5523-.4477 1-1 1s-1-.4477-1-1V7c0-2.2091 1.7909-4 4-4h1c.5523 0 1 .4477 1 1s-.4477 1-1 1zM15 4c0-.5523.4477-1 1-1h1c2.2091 0 4 1.7909 4 4v1c0 .5523-.4477 1-1 1s-1-.4477-1-1V7c0-1.1046-.8954-2-2-2h-1c-.5523 0-1-.4477-1-1M4 15c.5523 0 1 .4477 1 1v1c0 1.1046.8954 2 2 2h1c.5523 0 1 .4477 1 1s-.4477 1-1 1H7c-2.2091 0-4-1.7909-4-4v-1c0-.5523.4477-1 1-1M20 15c.5523 0 1 .4477 1 1v1c0 2.2091-1.7909 4-4 4h-1c-.5523 0-1-.4477-1-1s.4477-1 1-1h1c1.1046 0 2-.8954 2-2v-1c0-.5523.4477-1 1-1M11 8c-1.6569 0-3 1.3431-3 3v2c0 1.6569 1.3431 3 3 3h2c1.6569 0 3-1.3431 3-3v-2c0-1.6569-1.3431-3-3-3z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(FocusSquareFilledIcon);
export default ForwardRef;
