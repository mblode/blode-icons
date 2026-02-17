import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CodeLinesFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M2 5c0-.5523.4477-1 1-1h10c.5523 0 1 .4477 1 1s-.4477 1-1 1H3c-.5523 0-1-.4477-1-1m15 0c0-.5523.4477-1 1-1h3c.5523 0 1 .4477 1 1s-.4477 1-1 1h-3c-.5523 0-1-.4477-1-1M2 12c0-.5523.4477-1 1-1h5c.5523 0 1 .4477 1 1s-.4477 1-1 1H3c-.5523 0-1-.4477-1-1m10 0c0-.5523.4477-1 1-1h8c.5523 0 1 .4477 1 1s-.4477 1-1 1h-8c-.5523 0-1-.4477-1-1M2 19c0-.5523.4477-1 1-1h7c.5523 0 1 .4477 1 1s-.4477 1-1 1H3c-.5523 0-1-.4477-1-1m12 0c0-.5523.4477-1 1-1h6c.5523 0 1 .4477 1 1s-.4477 1-1 1h-6c-.5523 0-1-.4477-1-1" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(CodeLinesFilledIcon);
export default createLucideIcon('CodeLinesFilledIcon', ForwardRef);
