import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const NotepadFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M8 1.5c.5523 0 1 .4477 1 1h2c0-.5523.4477-1 1-1s1 .4477 1 1h2c0-.5523.4477-1 1-1s1 .4477 1 1v.031c1.9732.246 3.5 1.9292 3.5 3.969v11c0 2.2091-1.7909 4-4 4h-9c-2.2091 0-4-1.7909-4-4v-11c0-2.0398 1.5268-3.723 3.5-3.969V2.5c0-.5523.4477-1 1-1M8 10c0-.5523.4477-1 1-1h6c.5523 0 1 .4477 1 1s-.4477 1-1 1H9c-.5523 0-1-.4477-1-1m0 4c0-.5523.4477-1 1-1h4c.5523 0 1 .4477 1 1s-.4477 1-1 1H9c-.5523 0-1-.4477-1-1" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(NotepadFilledIcon);
export default ForwardRef;
