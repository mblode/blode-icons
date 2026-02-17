import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ChipSimpleFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M14 14h-4v-4h4z" /><path fill="currentColor" fillRule="evenodd" d="M14 1c.5523 0 1 .4477 1 1v1h2c2.2091 0 4 1.7909 4 4v2h1l.1025.0049c.5042.0513.8975.4774.8975.9951s-.3933.9438-.8975.9951L22 11h-1v2h1l.1025.0049c.5042.0513.8975.4774.8975.9951s-.3933.9438-.8975.9951L22 15h-1v2c0 2.2091-1.7909 4-4 4h-2v1c0 .5523-.4477 1-1 1s-1-.4477-1-1v-1h-2v1c0 .5523-.4477 1-1 1s-1-.4477-1-1v-1H7c-2.2091 0-4-1.7909-4-4v-2H2c-.5523 0-1-.4477-1-1s.4477-1 1-1h1v-2H2c-.5523 0-1-.4477-1-1s.4477-1 1-1h1V7c0-2.2091 1.7909-4 4-4h2V2c0-.5523.4477-1 1-1s1 .4477 1 1v1h2V2c0-.5523.4477-1 1-1M9 8c-.5177 0-.9438.3933-.9951.8975L8 9v6c0 .5523.4477 1 1 1h6c.5523 0 1-.4477 1-1V9c0-.5177-.3933-.9438-.8975-.9951L15 8z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(ChipSimpleFilledIcon);
export default ForwardRef;
