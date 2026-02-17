import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SparklesTwoIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinejoin="round" strokeWidth={2} d="M22 15c-4.8611 0-7 2.1389-7 7 0-4.8611-2.1389-7-7-7 4.8611 0 7-2.1389 7-7 0 4.8611 2.1389 7 7 7ZM11 6.5c-3.125 0-4.5 1.375-4.5 4.5 0-3.125-1.375-4.5-4.5-4.5 3.125 0 4.5-1.375 4.5-4.5 0 3.125 1.375 4.5 4.5 4.5Z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SparklesTwoIcon);
export default createLucideIcon('SparklesTwoIcon', ForwardRef);
