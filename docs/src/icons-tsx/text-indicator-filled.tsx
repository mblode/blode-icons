import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const TextIndicatorFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M16 3c0-.5523.4477-1 1-1h4c.5523 0 1 .4477 1 1s-.4477 1-1 1h-1v16h1c.5523 0 1 .4477 1 1s-.4477 1-1 1h-4c-.5523 0-1-.4477-1-1s.4477-1 1-1h1V4h-1c-.5523 0-1-.4477-1-1M2 6c0-.5523.4477-1 1-1h10c.5523 0 1 .4477 1 1s-.4477 1-1 1H9v11c0 .5523-.4477 1-1 1s-1-.4477-1-1V7H3c-.5523 0-1-.4477-1-1" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(TextIndicatorFilledIcon);
export default createLucideIcon('TextIndicatorFilledIcon', ForwardRef);
