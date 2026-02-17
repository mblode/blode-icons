import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const LeaderboardIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinejoin="round" strokeWidth={2} d="M8.5 9c0-1.1046.8954-2 2-2h3c1.1046 0 2 .8954 2 2v8h-7zM1.5 11.5c0-1.1046.8954-2 2-2h5V17h-5c-1.1046 0-2-.8954-2-2zM15.5 11h5c1.1046 0 2 .8954 2 2v2c0 1.1046-.8954 2-2 2h-5z" style={{
    stroke: "currentColor",
    strokeOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(LeaderboardIcon);
export default createLucideIcon('LeaderboardIcon', ForwardRef);
