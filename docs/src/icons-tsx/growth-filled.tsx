import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const GrowthFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M4 3c-.5523 0-1 .4477-1 1v1c0 4.4183 3.5817 8 8 8v7c0 .5523.4477 1 1 1s1-.4477 1-1v-4c4.4183 0 8-3.5817 8-8V7c0-.5523-.4477-1-1-1h-1c-2.5293 0-4.7844 1.1738-6.2504 3.0063C11.8637 5.5527 8.73 3 5 3z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(GrowthFilledIcon);
export default createLucideIcon('GrowthFilledIcon', ForwardRef);
