import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ArrowSplitDownFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M12 3c.5523 0 1 .4477 1 1v7.5859l6 6V15c0-.5523.4477-1 1-1s1 .4477 1 1v5c0 .5523-.4477 1-1 1h-5c-.5523 0-1-.4477-1-1s.4477-1 1-1h2.5859L12 13.4141 6.414 19H9c.5523 0 1 .4477 1 1s-.4477 1-1 1H4c-.5523 0-1-.4477-1-1v-5c0-.5523.4477-1 1-1s1 .4477 1 1v2.5859l6-6V4c0-.5523.4477-1 1-1" /></svg>;
const ForwardRef = forwardRef(ArrowSplitDownFilledIcon);
export default createLucideIcon('ArrowSplitDownFilledIcon', ForwardRef);
