import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const StepBackFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M7.7071 2.2929c.3905.3905.3905 1.0237 0 1.4142L6.4142 5H13.5c4.1421 0 7.5 3.3579 7.5 7.5S17.6421 20 13.5 20H6c-.5523 0-1-.4477-1-1s.4477-1 1-1h7.5c3.0376 0 5.5-2.4624 5.5-5.5S16.5376 7 13.5 7H6.4142l1.293 1.2929c.3904.3905.3904 1.0237 0 1.4142-.3906.3905-1.0238.3905-1.4143 0l-3-3c-.3905-.3905-.3905-1.0237 0-1.4142l3-3c.3905-.3905 1.0237-.3905 1.4142 0" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(StepBackFilledIcon);
export default createLucideIcon('StepBackFilledIcon', ForwardRef);
