import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ArrowDownRightIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="lucide lucide-arrow-down-right" viewBox="0 0 24 24" ref={ref} {...props}><path d="m7 7 10 10M17 7v10H7" /></svg>;
const ForwardRef = forwardRef(ArrowDownRightIcon);
export default createLucideIcon('ArrowDownRightIcon', ForwardRef);
