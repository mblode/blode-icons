import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CodeInsertFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M16 1.5c.5523 0 1 .4477 1 1V4h1c2.2091 0 4 1.7909 4 4v8c0 2.2091-1.7909 4-4 4h-1v1.5c0 .5523-.4477 1-1 1s-1-.4477-1-1v-19c0-.5523.4477-1 1-1" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /><path fill="currentColor" fillRule="evenodd" d="M2 8c0-2.2091 1.7909-4 4-4h7v16H6c-2.2091 0-4-1.7909-4-4zm5.7071.7929c-.3905-.3905-1.0237-.3905-1.4142 0s-.3905 1.0237 0 1.4142L8.0858 12l-1.793 1.7929c-.3904.3905-.3904 1.0237 0 1.4142.3906.3905 1.0238.3905 1.4143 0l2.5-2.5c.3905-.3905.3905-1.0237 0-1.4142z" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(CodeInsertFilledIcon);
export default createLucideIcon('CodeInsertFilledIcon', ForwardRef);
