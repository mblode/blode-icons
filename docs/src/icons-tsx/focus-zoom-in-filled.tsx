import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const FocusZoomInFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M5 7c0-1.1046.8954-2 2-2h1c.5523 0 1-.4477 1-1s-.4477-1-1-1H7C4.7909 3 3 4.7909 3 7v1c0 .5523.4477 1 1 1s1-.4477 1-1zM16 3c-.5523 0-1 .4477-1 1s.4477 1 1 1h1c1.1046 0 2 .8954 2 2v1c0 .5523.4477 1 1 1s1-.4477 1-1V7c0-2.2091-1.7909-4-4-4zM5 16c0-.5523-.4477-1-1-1s-1 .4477-1 1v1c0 2.2091 1.7909 4 4 4h1c.5523 0 1-.4477 1-1s-.4477-1-1-1H7c-1.1046 0-2-.8954-2-2zM21 16c0-.5523-.4477-1-1-1s-1 .4477-1 1v1c0 1.1046-.8954 2-2 2h-1c-.5523 0-1 .4477-1 1s.4477 1 1 1h1c2.2091 0 4-1.7909 4-4zM9 11c-.5523 0-1 .4477-1 1s.4477 1 1 1h6c.5523 0 1-.4477 1-1s-.4477-1-1-1z" /></svg>;
const ForwardRef = forwardRef(FocusZoomInFilledIcon);
export default createLucideIcon('FocusZoomInFilledIcon', ForwardRef);
