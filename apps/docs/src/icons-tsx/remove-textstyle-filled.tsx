import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const RemoveTextstyleFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M2.2502 3.3384c.3654-.4141.9973-.4536 1.4114-.0882l17 15c.4142.3654.4537.9973.0882 1.4114s-.9973.4537-1.4114.0882l-7.4749-6.5954-.8712 6.9696c-.0685.5481-.5683.9368-1.1163.8683s-.9368-.5683-.8683-1.1163l1.0224-8.1789a1 1 0 0 1 .0268-.1368L2.3384 4.7499c-.4141-.3655-.4536-.9974-.0882-1.4115M8 4c0-.5523.4477-1 1-1h10c.5523 0 1 .4477 1 1s-.4477 1-1 1h-6.1172l-.2655 2.124c-.0685.548-.5683.9368-1.1163.8683s-.9368-.5683-.8683-1.1163L10.8672 5H9c-.5523 0-1-.4477-1-1" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(RemoveTextstyleFilledIcon);
export default createLucideIcon('RemoveTextstyleFilledIcon', ForwardRef);
