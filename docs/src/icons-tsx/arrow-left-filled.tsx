import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ArrowLeftFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M11.0607 18.5607c-.5858.5857-1.5356.5857-2.1214 0l-5.5-5.5a1.5 1.5 0 0 1 0-2.1213l5.5-5.5c.5858-.5858 1.5356-.5858 2.1214 0s.5857 1.5355 0 2.1213L8.1213 10.5H19.5c.8284 0 1.5.6716 1.5 1.5s-.6716 1.5-1.5 1.5H8.1213l2.9394 2.9393c.5857.5858.5857 1.5356 0 2.1214" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(ArrowLeftFilledIcon);
export default createLucideIcon('ArrowLeftFilledIcon', ForwardRef);
