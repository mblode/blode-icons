import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ArmchairFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><rect width={2} height={4} x={6} y={17} fill="currentColor" rx={1} style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /><path fill="currentColor" d="M5 7v3c1.6569 0 3 1.3431 3 3h8c0-1.6569 1.3431-3 3-3V7c0-2.2091-1.7909-4-4-4H9C6.7909 3 5 4.7909 5 7" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /><path fill="currentColor" d="M3 13.5c0-.8284.6716-1.5 1.5-1.5s1.5.6716 1.5 1.5V15h12v-2c0-.8284.6716-1.5 1.5-1.5s1.5.6716 1.5 1.5v2c0 1.8638-1.2748 3.4299-3 3.874V20c0 .5523-.4477 1-1 1s-1-.4477-1-1v-1H7c-2.2091 0-4-1.7909-4-4z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(ArmchairFilledIcon);
export default createLucideIcon('ArmchairFilledIcon', ForwardRef);
