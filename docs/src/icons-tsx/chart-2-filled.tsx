import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Chart2FilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M1 4c0-.5523.4477-1 1-1h20c.5523 0 1 .4477 1 1s-.4477 1-1 1h-1v9c0 2.2091-1.7909 4-4 4h-3.1315l.9636 1.4453c.3063.4595.1821 1.0804-.2774 1.3868s-1.0804.1821-1.3868-.2774L12 18.8028l-1.1679 1.7519c-.3064.4595-.9273.5837-1.3868.2774s-.5837-.9273-.2774-1.3868L10.1315 18H7c-2.2091 0-4-1.7909-4-4V5H2c-.5523 0-1-.4477-1-1m12 4c0-.5523-.4477-1-1-1s-1 .4477-1 1v5c0 .5523.4477 1 1 1s1-.4477 1-1zm4 2c0-.5523-.4477-1-1-1s-1 .4477-1 1v3c0 .5523.4477 1 1 1s1-.4477 1-1zm-8 2c0-.5523-.4477-1-1-1s-1 .4477-1 1v1c0 .5523.4477 1 1 1s1-.4477 1-1z" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(Chart2FilledIcon);
export default createLucideIcon('Chart2FilledIcon', ForwardRef);
