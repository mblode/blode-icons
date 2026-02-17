import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SparkleIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinejoin="round" strokeWidth={2} d="M21 12.5c-6.25 0-9 2.9028-9 9.5 0-6.5972-2.75-9.5-9-9.5 6.25 0 9-2.9028 9-9.5 0 6.5972 2.75 9.5 9 9.5Z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SparkleIcon);
export default createLucideIcon('SparkleIcon', ForwardRef);
