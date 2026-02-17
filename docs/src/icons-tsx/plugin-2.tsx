import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Plugin2Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 11c0-1.6569 1.3431-3 3-3h12c1.6569 0 3 1.3431 3 3v5c0 1.6569-1.3431 3-3 3H6c-1.6569 0-3-1.3431-3-3zM5 8V6c0-1.1046.8954-2 2-2h1c1.1046 0 2 .8954 2 2v2M14 8V6c0-1.1046.8954-2 2-2h1c1.1046 0 2 .8954 2 2v2" style={{
    stroke: "currentColor",
    strokeOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(Plugin2Icon);
export default createLucideIcon('Plugin2Icon', ForwardRef);
