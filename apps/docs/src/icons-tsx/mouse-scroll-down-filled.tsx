import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const MouseScrollDownFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M6 7c0-3.3137 2.6863-6 6-6s6 2.6863 6 6v5c0 3.3137-2.6863 6-6 6s-6-2.6863-6-6zm7-1c0-.5523-.4477-1-1-1s-1 .4477-1 1v2c0 .5523.4477 1 1 1s1-.4477 1-1zM8.168 19.4453c.3063-.4595.9272-.5837 1.3867-.2774l1.8906 1.2604a1 1 0 0 0 1.1094 0l1.8906-1.2604c.4595-.3063 1.0804-.1821 1.3868.2774s.1821 1.0804-.2774 1.3868l-1.8906 1.2603a3 3 0 0 1-3.3282 0l-1.8906-1.2603c-.4595-.3064-.5837-.9273-.2774-1.3868" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(MouseScrollDownFilledIcon);
export default createLucideIcon('MouseScrollDownFilledIcon', ForwardRef);
