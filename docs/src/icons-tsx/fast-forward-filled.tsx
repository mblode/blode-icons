import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const FastForwardFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M4 7.204c0-1.7182 2.0238-2.6366 3.317-1.505L12 9.7965V7.204c0-1.7183 2.0238-2.6367 3.317-1.5052l5.4814 4.7963c.9107.7968.9107 2.2135 0 3.0103l-5.4814 4.7962C14.0238 19.4332 12 18.5149 12 16.7965v-2.5924l-4.683 4.0976C6.0238 19.4332 4 18.5149 4 16.7965z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(FastForwardFilledIcon);
export default createLucideIcon('FastForwardFilledIcon', ForwardRef);
