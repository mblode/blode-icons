import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const BubbleAnnotation2FilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M22.002 7c0-2.2091-1.7909-4-4-4h-12c-2.2092 0-4 1.7909-4 4v8c0 2.2091 1.7908 4 4 4v2a1 1 0 0 0 1.5145.8575L12.2789 19h5.7231c2.2091 0 4-1.7909 4-4zM6.2498 11c0 .6904.5596 1.25 1.25 1.25s1.25-.5596 1.25-1.25-.5597-1.25-1.25-1.25-1.25.5596-1.25 1.25m4.5 0c0 .6904.5596 1.25 1.25 1.25s1.25-.5596 1.25-1.25-.5597-1.25-1.25-1.25-1.25.5596-1.25 1.25m5.75 1.25c-.6904 0-1.25-.5596-1.25-1.25s.5596-1.25 1.25-1.25 1.25.5596 1.25 1.25-.5597 1.25-1.25 1.25" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(BubbleAnnotation2FilledIcon);
export default createLucideIcon('BubbleAnnotation2FilledIcon', ForwardRef);
