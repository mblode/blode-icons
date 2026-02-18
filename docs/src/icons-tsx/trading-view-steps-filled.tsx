import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const TradingViewStepsFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M9.5 3c.5523 0 1 .4477 1 1v8c0 .5523-.4477 1-1 1s-1-.4477-1-1V4c0-.5523.4477-1 1-1M4 7c.5523 0 1 .4477 1 1v8c0 .5523-.4477 1-1 1s-1-.4477-1-1V8c0-.5523.4477-1 1-1m16 0c.5523 0 1 .4477 1 1v8c0 .5523-.4477 1-1 1s-1-.4477-1-1V8c0-.5523.4477-1 1-1m-5.5 4c.5523 0 1 .4477 1 1v8c0 .5523-.4477 1-1 1s-1-.4477-1-1v-8c0-.5523.4477-1 1-1" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(TradingViewStepsFilledIcon);
export default createLucideIcon('TradingViewStepsFilledIcon', ForwardRef);
