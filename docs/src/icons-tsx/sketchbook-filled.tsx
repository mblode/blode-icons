import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SketchbookFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M3.5 6.5c0-2.2091 1.7909-4 4-4h9c2.2091 0 4 1.7909 4 4v11c0 2.2091-1.7909 4-4 4h-9c-2.2091 0-4-1.7909-4-4zM8 8c0-.5523.4477-1 1-1h6c.5523 0 1 .4477 1 1s-.4477 1-1 1H9c-.5523 0-1-.4477-1-1m0 4c0-.5523.4477-1 1-1h3c.5523 0 1 .4477 1 1s-.4477 1-1 1H9c-.5523 0-1-.4477-1-1" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(SketchbookFilledIcon);
export default createLucideIcon('SketchbookFilledIcon', ForwardRef);
