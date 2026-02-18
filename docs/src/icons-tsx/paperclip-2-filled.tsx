import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Paperclip2FilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M11 5.5C11 3.567 12.567 2 14.5 2S18 3.567 18 5.5V16c0 3.3137-2.6863 6-6 6s-6-2.6863-6-6V9c0-.5523.4477-1 1-1s1 .4477 1 1v7c0 2.2091 1.7909 4 4 4s4-1.7909 4-4V5.5c0-.8284-.6716-1.5-1.5-1.5S13 4.6716 13 5.5V15c0 .5523-.4477 1-1 1s-1-.4477-1-1z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(Paperclip2FilledIcon);
export default createLucideIcon('Paperclip2FilledIcon', ForwardRef);
