import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CryptopunkFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M5 6c0-2.2091 1.7909-4 4-4h6c2.2091 0 4 1.7909 4 4h2c.5523 0 1 .4477 1 1s-.4477 1-1 1h-2v8c0 2.2091-1.7909 4-4 4h-3v1c0 .5523-.4477 1-1 1H6c-.5523 0-1-.4477-1-1v-6.1707C3.8348 14.4175 3 13.3062 3 12s.8348-2.4175 2-2.8293zm2 0h10c0-1.1046-.8954-2-2-2H9c-1.1046 0-2 .8954-2 2m3 4c0-.5523.4477-1 1-1h.01c.5523 0 1 .4477 1 1s-.4477 1-1 1H11c-.5523 0-1-.4477-1-1m4 0c0-.5523.4477-1 1-1h.01c.5523 0 1 .4477 1 1s-.4477 1-1 1H15c-.5523 0-1-.4477-1-1m-2.0877 4.1047c.4.12.9571.1472 1.8452-.0748.5358-.134 1.0787.1918 1.2126.7276.134.5358-.1918 1.0787-.7276 1.2126-1.1119.278-2.0548.3052-2.9048.0502-.8494-.2548-1.4886-.757-2.0448-1.3132-.3905-.3905-.3905-1.0237 0-1.4142s1.0237-.3905 1.4142 0c.4438.4438.8046.6916 1.2052.8118" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(CryptopunkFilledIcon);
export default createLucideIcon('CryptopunkFilledIcon', ForwardRef);
