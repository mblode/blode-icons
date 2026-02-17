import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const MathLessThanFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M18.9228 6.6157c-.2124-.5099-.7979-.751-1.3077-.5385l-12 5a1 1 0 0 0 0 1.8461l12 5c.5098.2125 1.0953-.0286 1.3077-.5384s-.0286-1.0953-.5384-1.3077l-9.7846-4.0769 9.7846-4.077c.5098-.2124.7509-.7979.5384-1.3077" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(MathLessThanFilledIcon);
export default createLucideIcon('MathLessThanFilledIcon', ForwardRef);
