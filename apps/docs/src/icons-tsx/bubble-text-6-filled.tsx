import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const BubbleText6FilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M2 9c0-3.3137 2.6863-6 6-6h8c3.3137 0 6 2.6863 6 6v6c0 3.3137-2.6863 6-6 6H3c-.5523 0-1-.4477-1-1zm7 0c-.5523 0-1 .4477-1 1s.4477 1 1 1h6c.5523 0 1-.4477 1-1s-.4477-1-1-1zm0 4c-.5523 0-1 .4477-1 1s.4477 1 1 1h3c.5523 0 1-.4477 1-1s-.4477-1-1-1z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(BubbleText6FilledIcon);
export default createLucideIcon('BubbleText6FilledIcon', ForwardRef);
