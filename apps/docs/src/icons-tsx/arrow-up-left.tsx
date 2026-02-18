import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ArrowUpLeftIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="lucide lucide-arrow-up-left" viewBox="0 0 24 24" ref={ref} {...props}><path d="M7 17V7h10M17 17 7 7" /></svg>;
const ForwardRef = forwardRef(ArrowUpLeftIcon);
export default createLucideIcon('ArrowUpLeftIcon', ForwardRef);
