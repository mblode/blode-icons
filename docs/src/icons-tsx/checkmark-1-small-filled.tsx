import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Checkmark1SmallFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M16.53 7.1521c.4683.2927.6107.9097.318 1.378l-5 8a1 1 0 0 1-1.5551.1771l-3-3c-.3905-.3905-.3905-1.0236 0-1.4142s1.0237-.3905 1.4142 0l2.1111 2.1112 4.3338-6.934c.2927-.4684.9097-.6108 1.378-.318" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(Checkmark1SmallFilledIcon);
export default createLucideIcon('Checkmark1SmallFilledIcon', ForwardRef);
