import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const PizzaFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M14.0008 5c-.5523 0-1 .4477-1 1s.4477 1 1 1 1-.4478 1-1-.4477-1-1-1" /><path fill="currentColor" d="M11.0008 6a2.986 2.986 0 0 1 .428-1.5451l-4.2585.73c.5462 3.4851 2.3781 6.5439 4.9952 8.6755C12.6561 12.2064 14.1876 11 16.0008 11c1.4843 0 2.7799.8085 3.4702 2.0091l.7988-4.6598c.451-2.6307-1.7447-4.9281-4.35-4.6554.6606.5503 1.081 1.3791 1.081 2.306 0 1.657-1.3432 3-3 3s-3-1.343-3-3" /><path fill="currentColor" d="m17.318 16.5105.0916-.091A1.99 1.99 0 0 0 18.0008 15c0-1.1046-.8954-2-2-2s-2 .8954-2 2v.127a13.92 13.92 0 0 0 3.3172 1.3835" /><path fill="currentColor" d="M18.4256 18.7938C11.6518 17.6978 6.303 12.349 5.207 5.5752c-1.8239.6333-3.0946 2.572-2.3342 4.6152.9039 2.4287 2.3319 4.706 4.2817 6.6558 1.9499 1.9499 4.2271 3.3779 6.6559 4.2818 2.0432.7604 3.9819-.5104 4.6152-2.3342" /></svg>;
const ForwardRef = forwardRef(PizzaFilledIcon);
export default createLucideIcon('PizzaFilledIcon', ForwardRef);
