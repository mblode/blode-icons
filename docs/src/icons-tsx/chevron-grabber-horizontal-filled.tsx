import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ChevronGrabberHorizontalFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M9.707 7.2929c.3904.3905.3904 1.0237 0 1.4142l-3.1162 3.1161a.25.25 0 0 0 0 .3536l3.1161 3.1161c.3905.3905.3905 1.0237 0 1.4142s-1.0237.3905-1.4142 0L5.1766 13.591c-.8787-.8787-.8787-2.3033 0-3.182l3.1161-3.1161c.3905-.3905 1.0237-.3905 1.4142 0m4.5857 0c.3905-.3905 1.0237-.3905 1.4142 0l3.1161 3.1161c.8787.8787.8787 2.3033 0 3.182l-3.1161 3.1161c-.3905.3905-1.0237.3905-1.4142 0s-.3905-1.0237 0-1.4142l3.1161-3.1161a.25.25 0 0 0 0-.3536l-3.1161-3.116c-.3905-.3906-.3905-1.0238 0-1.4143" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(ChevronGrabberHorizontalFilledIcon);
export default createLucideIcon('ChevronGrabberHorizontalFilledIcon', ForwardRef);
