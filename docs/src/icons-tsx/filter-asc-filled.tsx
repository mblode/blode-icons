import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const FilterAscFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M17.2929 4.2929c.3905-.3905 1.0237-.3905 1.4142 0l3 3c.3905.3905.3905 1.0237 0 1.4142s-1.0237.3905-1.4142 0L19 7.4142V13c0 .5523-.4477 1-1 1s-1-.4477-1-1V7.4142l-1.2929 1.293c-.3905.3904-1.0237.3904-1.4142 0-.3905-.3906-.3905-1.0238 0-1.4143zM3 6c0-.5523.4477-1 1-1h5c.5523 0 1 .4477 1 1s-.4477 1-1 1H4c-.5523 0-1-.4477-1-1m0 6c0-.5523.4477-1 1-1h7c.5523 0 1 .4477 1 1s-.4477 1-1 1H4c-.5523 0-1-.4477-1-1m0 6c0-.5523.4477-1 1-1h14c.5523 0 1 .4477 1 1s-.4477 1-1 1H4c-.5523 0-1-.4477-1-1" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(FilterAscFilledIcon);
export default createLucideIcon('FilterAscFilledIcon', ForwardRef);
