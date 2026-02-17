import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const GraduateCapFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M12.4138 3.0896a1 1 0 0 0-.8276 0l-11 5a1 1 0 0 0 0 1.8208l11 5a1 1 0 0 0 .8276 0L22 10.553V16c0 .5523.4477 1 1 1s1-.4477 1-1V9a1 1 0 0 0-.5862-.9104z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /><path fill="currentColor" fillRule="evenodd" d="M4.5 12.801v2.1682a4 4 0 0 0 2.028 3.4801l3.4999 1.9833a4 4 0 0 0 3.9441 0l3.5-1.9833a4 4 0 0 0 2.028-3.4801V12.801l-6.5925 3.357a2 2 0 0 1-1.815 0z" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(GraduateCapFilledIcon);
export default createLucideIcon('GraduateCapFilledIcon', ForwardRef);
