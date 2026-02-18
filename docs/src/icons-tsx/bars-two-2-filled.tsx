import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const BarsTwo2FilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M2 7c0-.5523.4477-1 1-1h18c.5523 0 1 .4477 1 1s-.4477 1-1 1H3c-.5523 0-1-.4477-1-1m0 10c0-.5523.4477-1 1-1h11c.5523 0 1 .4477 1 1s-.4477 1-1 1H3c-.5523 0-1-.4477-1-1" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(BarsTwo2FilledIcon);
export default createLucideIcon('BarsTwo2FilledIcon', ForwardRef);
