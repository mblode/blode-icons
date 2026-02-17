import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ConstructionHelmetFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M3 12.5c0-3.5337 2.0366-6.5917 5-8.0645V14H3zM3 16h18H3m13-2h5v-1.5c0-3.5337-2.0366-6.5917-5-8.0645z" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /><rect width={20} height={4} x={2} y={16} fill="currentColor" rx={1.5} style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /><path fill="currentColor" d="M10 4c0-.5523.4477-1 1-1h2c.5523 0 1 .4477 1 1v10h-4z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(ConstructionHelmetFilledIcon);
export default createLucideIcon('ConstructionHelmetFilledIcon', ForwardRef);
