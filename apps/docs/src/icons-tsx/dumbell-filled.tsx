import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const DumbellFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M2.7191 17.5684c-.537-.537-.537-1.4076 0-1.9446.537-.5369 1.4076-.5369 1.9446 0l3.7123 3.7123c.537.537.537 1.4076 0 1.9446s-1.4076.537-1.9445 0zM15.6238 4.6637c-.5369-.537-.5369-1.4076 0-1.9446s1.4076-.537 1.9446 0l3.7123 3.7124c.537.537.537 1.4075 0 1.9445s-1.4076.537-1.9446 0zM3.7798 13.3257c-.6346-.6346-.6346-1.6635 0-2.2981s1.6635-.6346 2.298 0l6.8944 6.8943c.6346.6346.6346 1.6635 0 2.2981s-1.6635.6346-2.2981 0zM11.0276 6.0779c-.6346-.6346-.6346-1.6635 0-2.2981s1.6635-.6346 2.2981 0L20.22 10.674c.6346.6346.6346 1.6635 0 2.2981s-1.6635.6346-2.2981 0zM8.818 12.3535l3.5355-3.5356 2.8284 2.8285-3.5355 3.5355z" /></svg>;
const ForwardRef = forwardRef(DumbellFilledIcon);
export default createLucideIcon('DumbellFilledIcon', ForwardRef);
