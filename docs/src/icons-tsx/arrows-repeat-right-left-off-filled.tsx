import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ArrowsRepeatRightLeftOffFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M2.2929 2.2929c.3905-.3905 1.0237-.3905 1.4142 0l18 18c.3905.3905.3905 1.0237 0 1.4142s-1.0237.3905-1.4142 0L17.5858 19H6.4142l1.293 1.2929c.3904.3905.3904 1.0237 0 1.4142-.3906.3905-1.0238.3905-1.4143 0l-3-3c-.3905-.3905-.3905-1.0237 0-1.4142l3-3c.3905-.3905 1.0237-.3905 1.4142 0s.3905 1.0237 0 1.4142L6.4142 17h9.1716L5.909 7.3232C5.361 7.6806 5 8.299 5 9v2c0 .5523-.4477 1-1 1s-1-.4477-1-1V9c0-1.2546.5774-2.3731 1.4797-3.106L2.293 3.707c-.3905-.3905-.3905-1.0237 0-1.4142m14 0c.3905-.3905 1.0237-.3905 1.4142 0l3 3c.3905.3905.3905 1.0237 0 1.4142l-3 3c-.3905.3905-1.0237.3905-1.4142 0s-.3905-1.0237 0-1.4142L17.5858 7H11c-.5523 0-1-.4477-1-1s.4477-1 1-1h6.5858l-1.2929-1.2929c-.3905-.3905-.3905-1.0237 0-1.4142M21 13v2c0 .5523-.4477 1-1 1s-1-.4477-1-1v-2c0-.5523.4477-1 1-1s1 .4477 1 1" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(ArrowsRepeatRightLeftOffFilledIcon);
export default createLucideIcon('ArrowsRepeatRightLeftOffFilledIcon', ForwardRef);
