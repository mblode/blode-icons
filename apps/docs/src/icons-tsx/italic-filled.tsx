import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ItalicFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M9 4c0-.5523.4477-1 1-1h9c.5523 0 1 .4477 1 1s-.4477 1-1 1h-3.7648l-4.375 14H14c.5523 0 1 .4477 1 1s-.4477 1-1 1H5c-.5523 0-1-.4477-1-1s.4477-1 1-1h3.7648l4.375-14H10c-.5523 0-1-.4477-1-1" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(ItalicFilledIcon);
export default createLucideIcon('ItalicFilledIcon', ForwardRef);
