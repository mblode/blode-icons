import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Popsicle1FilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M5 8c0-3.866 3.134-7 7-7s7 3.134 7 7v6c0 2.2091-1.7909 4-4 4v2c0 1.6569-1.3431 3-3 3s-3-1.3431-3-3v-2c-2.2091 0-4-1.7909-4-4zm6 10v2c0 .5523.4477 1 1 1s1-.4477 1-1v-2zm0-11c0-.5523-.4477-1-1-1s-1 .4477-1 1v5.5c0 .5523.4477 1 1 1s1-.4477 1-1zm3-1c.5523 0 1 .4477 1 1v5.5c0 .5523-.4477 1-1 1s-1-.4477-1-1V7c0-.5523.4477-1 1-1" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(Popsicle1FilledIcon);
export default createLucideIcon('Popsicle1FilledIcon', ForwardRef);
