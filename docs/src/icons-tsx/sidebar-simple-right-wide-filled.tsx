import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SidebarSimpleRightWideFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M15 6v12H6c-1.1046 0-2-.8954-2-2V8c0-1.1046.8954-2 2-2zm7 2c0-2.2091-1.7909-4-4-4H6C3.7909 4 2 5.7909 2 8v8c0 2.2091 1.7909 4 4 4h12c2.2091 0 4-1.7909 4-4z" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(SidebarSimpleRightWideFilledIcon);
export default createLucideIcon('SidebarSimpleRightWideFilledIcon', ForwardRef);
