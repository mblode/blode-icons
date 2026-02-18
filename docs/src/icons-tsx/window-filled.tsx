import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const WindowFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M3 7c0-2.2091 1.7909-4 4-4h10c2.2091 0 4 1.7909 4 4v10c0 2.2091-1.7909 4-4 4H7c-2.2091 0-4-1.7909-4-4zm16 3H5V7c0-1.1046.8954-2 2-2h10c1.1046 0 2 .8954 2 2zm-9-2.5c0-.5523.4477-1 1-1h6c.5523 0 1 .4477 1 1s-.4477 1-1 1h-6c-.5523 0-1-.4477-1-1" clipRule="evenodd" /><path fill="currentColor" d="M9 7.5C9 8.3284 8.3284 9 7.5 9S6 8.3284 6 7.5 6.6716 6 7.5 6 9 6.6716 9 7.5" /></svg>;
const ForwardRef = forwardRef(WindowFilledIcon);
export default createLucideIcon('WindowFilledIcon', ForwardRef);
