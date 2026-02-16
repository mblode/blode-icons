import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ArrowSplitFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M3 4c0-.5523.4477-1 1-1h5c.5523 0 1 .4477 1 1s-.4477 1-1 1H6.4142L12 10.5858 17.5858 5H15c-.5523 0-1-.4477-1-1s.4477-1 1-1h5c.5523 0 1 .4477 1 1v5c0 .5523-.4477 1-1 1s-1-.4477-1-1V6.4142l-6 6V20c0 .5523-.4477 1-1 1s-1-.4477-1-1v-7.5858l-6-6V9c0 .5523-.4477 1-1 1s-1-.4477-1-1z" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(ArrowSplitFilledIcon);
export default ForwardRef;
