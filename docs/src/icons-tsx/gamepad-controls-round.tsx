import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const GamepadControlsRoundIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="square" strokeWidth={2} d="M14.75 5.75c0 1.5188-1.2312 2.75-2.75 2.75S9.25 7.2688 9.25 5.75 10.4812 3 12 3s2.75 1.2312 2.75 2.75ZM14.75 18.25c0 1.5188-1.2312 2.75-2.75 2.75s-2.75-1.2312-2.75-2.75S10.4812 15.5 12 15.5s2.75 1.2312 2.75 2.75ZM8.5 12c0 1.5188-1.2312 2.75-2.75 2.75S3 13.5188 3 12s1.2312-2.75 2.75-2.75S8.5 10.4812 8.5 12ZM21 12c0 1.5188-1.2312 2.75-2.75 2.75S15.5 13.5188 15.5 12s1.2312-2.75 2.75-2.75S21 10.4812 21 12Z" /></svg>;
const ForwardRef = forwardRef(GamepadControlsRoundIcon);
export default createLucideIcon('GamepadControlsRoundIcon', ForwardRef);
