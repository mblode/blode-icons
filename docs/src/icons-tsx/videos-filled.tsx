import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const VideosFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M4 4c0-.5523.4477-1 1-1h14c.5523 0 1 .4477 1 1s-.4477 1-1 1H5c-.5523 0-1-.4477-1-1m-2 6c0-2.2091 1.7909-4 4-4h12c2.2091 0 4 1.7909 4 4v7c0 2.2091-1.7909 4-4 4H6c-2.2091 0-4-1.7909-4-4zm8.5668.5987a1 1 0 0 1 1.0579.1204l2.5 2a1 1 0 0 1 0 1.5618l-2.5 2A1.0001 1.0001 0 0 1 10 15.5v-4a1 1 0 0 1 .5668-.9013" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(VideosFilledIcon);
export default createLucideIcon('VideosFilledIcon', ForwardRef);
