import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const AdjustPhotoIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 12c0 3.866-3.134 7-7 7s-7-3.134-7-7 3.134-7 7-7 7 3.134 7 7M7.5 16.5 12 12" style={{
    stroke: "currentColor",
    strokeOpacity: 1
  }} /><path stroke="currentColor" strokeLinecap="round" strokeWidth={2.2} d="M12 1.1001v.01M1.1016 12v.01M22.8984 12v.01M19.6992 4.3v.01m0-.01v.01M4.3008 4.3v.01M19.6992 19.7v.01m0-.01v.01M4.3008 19.7v.01" style={{
    stroke: "currentColor",
    strokeOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(AdjustPhotoIcon);
export default createLucideIcon('AdjustPhotoIcon', ForwardRef);
