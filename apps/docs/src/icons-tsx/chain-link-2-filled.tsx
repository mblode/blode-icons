import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ChainLink2FilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M5 8c-1.1046 0-2 .8954-2 2v4c0 1.1046.8954 2 2 2h3c.5523 0 1 .4477 1 1s-.4477 1-1 1H5c-2.2091 0-4-1.7909-4-4v-4c0-2.2091 1.7909-4 4-4h3c.5523 0 1 .4477 1 1s-.4477 1-1 1zm10-1c0-.5523.4477-1 1-1h3c2.2091 0 4 1.7909 4 4v4c0 2.2091-1.7909 4-4 4h-3c-.5523 0-1-.4477-1-1s.4477-1 1-1h3c1.1046 0 2-.8954 2-2v-4c0-1.1046-.8954-2-2-2h-3c-.5523 0-1-.4477-1-1m-9 5c0-.5523.4477-1 1-1h10c.5523 0 1 .4477 1 1s-.4477 1-1 1H7c-.5523 0-1-.4477-1-1" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(ChainLink2FilledIcon);
export default createLucideIcon('ChainLink2FilledIcon', ForwardRef);
