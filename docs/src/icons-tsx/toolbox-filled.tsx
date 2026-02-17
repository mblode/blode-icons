import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ToolboxFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M11.0039 10V6.5523a4 4 0 0 0-.8765-2.4987L9.0971 2.7657a2.0403 2.0403 0 0 0-3.1864 0L4.8804 4.0536a4 4 0 0 0-.8765 2.4987V10H3c-.5523 0-1 .4477-1 1v6c0 2.2091 1.7909 4 4 4h12c2.2091 0 4-1.7909 4-4v-6c0-.5523-.4477-1-1-1h-1V4c0-1.1046-.8954-2-2-2h-4c-1.1046 0-2 .8954-2 2v6zm-3.5-6a.04.04 0 0 0-.0315.0151L6.4422 5.303a2 2 0 0 0-.4383 1.2494V10h3V6.5523a2 2 0 0 0-.4383-1.2493L7.5354 4.015A.04.04 0 0 0 7.5039 4M14 10h4V4h-4v2h1.0039c.5523 0 1 .4477 1 1s-.4477 1-1 1H14z" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(ToolboxFilledIcon);
export default createLucideIcon('ToolboxFilledIcon', ForwardRef);
