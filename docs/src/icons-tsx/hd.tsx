import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const HdIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" strokeWidth={2} d="M18 5H6C4.3431 5 3 6.3431 3 8v8c0 1.6569 1.3431 3 3 3h12c1.6569 0 3-1.3431 3-3V8c0-1.6569-1.3431-3-3-3Z" /><path fill="currentColor" d="M6.1172 15.6221c-.6592 0-1.0352-.3907-1.0352-1.084v-5.122c0-.6934.376-1.084 1.0352-1.084s1.0351.3906 1.0351 1.084v1.7138h2.4805V9.416c0-.6933.376-1.084 1.0352-1.084s1.0351.3907 1.0351 1.084v5.1221c0 .6933-.376 1.084-1.0351 1.084-.6592 0-1.0352-.3907-1.0352-1.084v-1.7627H7.1523v1.7627c0 .6933-.376 1.084-1.0351 1.084M13.7148 15.5c-.6591 0-1.0351-.3906-1.0351-1.084V9.538c0-.6933.376-1.0839 1.0351-1.0839h1.9776c2.1387 0 3.3935 1.2158 3.3935 3.4717S17.8262 15.5 15.6924 15.5zm1.0352-1.6455h.6494c1.0352 0 1.5772-.6299 1.5772-1.9287 0-1.1865-.586-1.8262-1.5772-1.8262H14.75z" /></svg>;
const ForwardRef = forwardRef(HdIcon);
export default createLucideIcon('HdIcon', ForwardRef);
