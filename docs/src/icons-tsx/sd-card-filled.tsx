import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SdCardFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M8 2C5.7909 2 4 3.7909 4 6v12c0 2.2091 1.7909 4 4 4h8c2.2091 0 4-1.7909 4-4v-6.0917a4 4 0 0 0-.6718-2.2188l-.9923-1.4884A2 2 0 0 1 18 7.0917V6c0-2.2091-1.7909-4-4-4zm1 4c.5523 0 1 .4477 1 1v2c0 .5523-.4477 1-1 1s-1-.4477-1-1V7c0-.5523.4477-1 1-1m5 1c0-.5523-.4477-1-1-1s-1 .4477-1 1v2c0 .5523.4477 1 1 1s1-.4477 1-1z" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(SdCardFilledIcon);
export default ForwardRef;
