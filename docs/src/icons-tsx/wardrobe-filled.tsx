import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const WardrobeFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M4 6c0-2.2091 1.7909-4 4-4h3v18H8v1c0 .5523-.4477 1-1 1s-1-.4477-1-1v-1.5351C4.8044 18.7733 4 17.4806 4 16zm5 4c0-.5523-.4477-1-1-1s-1 .4477-1 1v2c0 .5523.4477 1 1 1s1-.4477 1-1zM13 20h3v1c0 .5523.4477 1 1 1s1-.4477 1-1v-1.5351c1.1956-.6916 2-1.9843 2-3.4649V6c0-2.2091-1.7909-4-4-4h-3zm3-11c.5523 0 1 .4477 1 1v2c0 .5523-.4477 1-1 1s-1-.4477-1-1v-2c0-.5523.4477-1 1-1" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(WardrobeFilledIcon);
export default createLucideIcon('WardrobeFilledIcon', ForwardRef);
