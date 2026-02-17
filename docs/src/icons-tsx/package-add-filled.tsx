import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const PackageAddFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M8 3H7C4.7909 3 3 4.7909 3 7v10c0 2.2091 1.7909 4 4 4h8.1707A3 3 0 0 1 15 20c-1.6569 0-3-1.3431-3-3s1.3431-3 3-3c0-1.6569 1.3431-3 3-3s3 1.3431 3 3V7c0-2.2091-1.7909-4-4-4h-1v3.5C16 7.8807 14.8807 9 13.5 9h-3C9.1193 9 8 7.8807 8 6.5z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /><path fill="currentColor" d="M14 3h-4v3.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5zM19 14c0-.5523-.4477-1-1-1s-1 .4477-1 1v2h-2c-.5523 0-1 .4477-1 1s.4477 1 1 1h2v2c0 .5523.4477 1 1 1s1-.4477 1-1v-2h2c.5523 0 1-.4477 1-1s-.4477-1-1-1h-2z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(PackageAddFilledIcon);
export default createLucideIcon('PackageAddFilledIcon', ForwardRef);
