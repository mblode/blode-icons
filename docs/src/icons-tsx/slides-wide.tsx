import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SlidesWideIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" strokeWidth={2} d="M7 15H6c-1.6569 0-3-1.3431-3-3V8c0-1.6569 1.3431-3 3-3h8c1.6569 0 3 1.3431 3 3v1m4 7v-4c0-1.6569-1.3431-3-3-3h-8c-1.6569 0-3 1.3431-3 3v4c0 1.6569 1.3431 3 3 3h8c1.6569 0 3-1.3431 3-3Z" /></svg>;
const ForwardRef = forwardRef(SlidesWideIcon);
export default ForwardRef;
