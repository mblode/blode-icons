import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const FileTextFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M12 2H8C5.7909 2 4 3.7909 4 6v12c0 2.2091 1.7909 4 4 4h8c2.2091 0 4-1.7909 4-4v-8h-5c-1.6569 0-3-1.3431-3-3zM8 14c0-.5523.4477-1 1-1h3c.5523 0 1 .4477 1 1s-.4477 1-1 1H9c-.5523 0-1-.4477-1-1m1 3c-.5523 0-1 .4477-1 1s.4477 1 1 1h6.5c.5523 0 1-.4477 1-1s-.4477-1-1-1z" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /><path fill="currentColor" d="M19.4142 8 14 2.5858V7c0 .5523.4477 1 1 1z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(FileTextFilledIcon);
export default createLucideIcon('FileTextFilledIcon', ForwardRef);
