import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const AspectRatio219FilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M4 6c-2.2091 0-4 1.7909-4 4v4c0 2.2091 1.7909 4 4 4h16c2.2091 0 4-1.7909 4-4v-4c0-2.2091-1.7909-4-4-4z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(AspectRatio219FilledIcon);
export default createLucideIcon('AspectRatio219FilledIcon', ForwardRef);
