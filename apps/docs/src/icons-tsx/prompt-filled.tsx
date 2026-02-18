import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const PromptFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={25} height={24} fill="none" viewBox="0 0 25 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M2.75 8c0-2.2091 1.7909-4 4-4 .5523 0 1 .4477 1 1s-.4477 1-1 1c-1.1046 0-2 .8954-2 2 0 .5523-.4477 1-1 1s-1-.4477-1-1m15-3c0-.5523.4477-1 1-1 2.2091 0 4 1.7909 4 4 0 .5523-.4477 1-1 1s-1-.4477-1-1c0-1.1046-.8954-2-2-2-.5523 0-1-.4477-1-1m-10 5c0-.5523.4477-1 1-1h8c.5523 0 1 .4477 1 1s-.4477 1-1 1h-8c-.5523 0-1-.4477-1-1m0 4c0-.5523.4477-1 1-1h6c.5523 0 1 .4477 1 1s-.4477 1-1 1h-6c-.5523 0-1-.4477-1-1m-4 1c.5523 0 1 .4477 1 1 0 1.1046.8954 2 2 2 .5523 0 1 .4477 1 1s-.4477 1-1 1c-2.2091 0-4-1.7909-4-4 0-.5523.4477-1 1-1m18 0c.5523 0 1 .4477 1 1 0 2.2091-1.7909 4-4 4-.5523 0-1-.4477-1-1s.4477-1 1-1c1.1046 0 2-.8954 2-2 0-.5523.4477-1 1-1" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(PromptFilledIcon);
export default createLucideIcon('PromptFilledIcon', ForwardRef);
