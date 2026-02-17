import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ChecklistFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M9.1 5.2c.4418.3314.5314.9582.2 1.4l-3 4.0001a1 1 0 0 1-1.3547.232l-1.5-1c-.4595-.3063-.5837-.9272-.2774-1.3867s.9273-.5837 1.3868-.2774l.7129.4753L7.7 5.4c.3313-.4419.9582-.5314 1.4-.2M12 8c0-.5522.4477-1 1-1h7c.5523 0 1 .4478 1 1s-.4477 1-1 1h-7c-.5523 0-1-.4477-1-1m-2.9 5.2001c.4418.3313.5314.9581.2 1.4l-3 4a1 1 0 0 1-1.3547.232l-1.5-1c-.4595-.3063-.5837-.9272-.2774-1.3867s.9273-.5837 1.3868-.2774l.7129.4753L7.7 13.4001c.3313-.4419.9582-.5314 1.4-.2m2.9 2.8c0-.5523.4477-1 1-1h7c.5523 0 1 .4477 1 1s-.4477 1-1 1h-7c-.5523 0-1-.4478-1-1" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(ChecklistFilledIcon);
export default createLucideIcon('ChecklistFilledIcon', ForwardRef);
