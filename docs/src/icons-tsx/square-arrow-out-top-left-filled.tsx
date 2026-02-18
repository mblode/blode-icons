import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SquareArrowOutTopLeftFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M3 5c0-1.1046.8954-2 2-2h5c.5523 0 1 .4477 1 1s-.4477 1-1 1H6.4142l4.5429 4.5429c.3905.3905.3905 1.0237 0 1.4142s-1.0237.3905-1.4142 0L5 6.4142V10c0 .5523-.4477 1-1 1s-1-.4477-1-1zm10 2c0-.5523.4477-1 1-1h4c2.2091 0 4 1.7909 4 4v8c0 2.2091-1.7909 4-4 4h-8c-2.2091 0-4-1.7909-4-4v-4c0-.5523.4477-1 1-1s1 .4477 1 1v4c0 1.1046.8954 2 2 2h8c1.1046 0 2-.8954 2-2v-8c0-1.1046-.8954-2-2-2h-4c-.5523 0-1-.4477-1-1" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SquareArrowOutTopLeftFilledIcon);
export default createLucideIcon('SquareArrowOutTopLeftFilledIcon', ForwardRef);
