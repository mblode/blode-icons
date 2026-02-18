import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SlideTallAddFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M8 22c-2.2091 0-4-1.7909-4-4V6c0-2.2091 1.7909-4 4-4h8c2.2091 0 4 1.7909 4 4v12c0 2.2091-1.7909 4-4 4zm1-11c-.5523 0-1 .4477-1 1s.4477 1 1 1h2v2c0 .5523.4477 1 1 1s1-.4477 1-1v-2h2c.5523 0 1-.4477 1-1s-.4477-1-1-1h-2V9c0-.5523-.4477-1-1-1s-1 .4477-1 1v2z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SlideTallAddFilledIcon);
export default createLucideIcon('SlideTallAddFilledIcon', ForwardRef);
