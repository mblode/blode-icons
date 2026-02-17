import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const FocusModeIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 21v-1c0-1.1046.8954-2 2-2s2-.8954 2-2v-1.9338a1 1 0 0 1 .4855-.8575l1.1152-.6691c.4896-.2938.6335-.937.3065-1.405-.9173-1.3127-1.7255-2.4012-2.3517-4.0018C16.4738 4.3678 13.8499 3 11 3c-3.866 0-7 3.134-7 7 0 1.6287.5563 3.1275 1.4891 4.3168C7.1347 16.4146 7 18.4758 7 21" style={{
    stroke: "currentColor",
    strokeOpacity: 1
  }} /><path fill="currentColor" d="M11 2.5c0-.5523-.4477-1-1-1s-1 .4477-1 1zM9 7c0 .5523.4477 1 1 1s1-.4477 1-1zm0-4.5V7h2V2.5zm-1 5V12h2V7.5zm2 0V12h2V7.5zM11.5 9v1.5h2V9zm-3 1.5V9h-2v1.5zM10 12c-.8284 0-1.5-.6716-1.5-1.5h-2c0 1.933 1.567 3.5 3.5 3.5zm1.5-1.5c0 .8284-.6716 1.5-1.5 1.5v2c1.933 0 3.5-1.567 3.5-3.5zm-1.5-3c.8284 0 1.5.6716 1.5 1.5h2c0-1.933-1.567-3.5-3.5-3.5zm0-2C8.067 5.5 6.5 7.067 6.5 9h2c0-.8284.6716-1.5 1.5-1.5z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(FocusModeIcon);
export default createLucideIcon('FocusModeIcon', ForwardRef);
