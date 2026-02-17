import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ArrowDownLeftIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="lucide lucide-arrow-down-left" viewBox="0 0 24 24" ref={ref} {...props}><path d="M17 7 7 17M17 17H7V7" /></svg>;
const ForwardRef = forwardRef(ArrowDownLeftIcon);
export default createLucideIcon('ArrowDownLeftIcon', ForwardRef);
