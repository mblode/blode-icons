import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const MarkdownIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 10v4m0 0 1.5-1.25M16 14l-1.5-1.25M7 14v-4l2.25 2 2.25-2v4M6 5h12c1.6569 0 3 1.3431 3 3v8c0 1.6569-1.3431 3-3 3H6c-1.6569 0-3-1.3431-3-3V8c0-1.6569 1.3431-3 3-3" /></svg>;
const ForwardRef = forwardRef(MarkdownIcon);
export default ForwardRef;
