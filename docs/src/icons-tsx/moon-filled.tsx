import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const MoonFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M12.0517 3.5997a1 1 0 0 0-.9079-1.5639C6.0214 2.4698 2 6.7638 2 11.998c0 5.5218 4.4763 9.9981 9.9981 9.9981 5.2343 0 9.5283-4.0215 9.9621-9.1441a1 1 0 0 0-1.5639-.9078c-.9661.6659-2.1361 1.0557-3.4002 1.0557-3.3137 0-6-2.6863-6-6 0-1.264.3897-2.434 1.0556-3.4" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(MoonFilledIcon);
export default createLucideIcon('MoonFilledIcon', ForwardRef);
