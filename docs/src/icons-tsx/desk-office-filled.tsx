import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const DeskOfficeFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M4 9c0-1.1046.8954-2 2-2h4v10c0 1.1046.8954 2 2 2h8c1.1046 0 2-.8954 2-2V9c0-2.2091-1.7909-4-4-4H6C3.7909 5 2 6.7909 2 9v9c0 .5523.4477 1 1 1s1-.4477 1-1zm12 1c0-.5523-.4477-1-1-1s-1 .4477-1 1v1c0 .5523.4477 1 1 1s1-.4477 1-1z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(DeskOfficeFilledIcon);
export default createLucideIcon('DeskOfficeFilledIcon', ForwardRef);
