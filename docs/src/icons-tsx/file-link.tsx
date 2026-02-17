import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const FileLinkIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="M5 8V6c0-1.6569 1.3431-3 3-3h4.1716a2 2 0 0 1 1.4142.5858l4.8284 4.8284A2 2 0 0 1 19 9.8284V18c0 1.6569-1.3431 3-3 3h-3.5M13 3.5V7c0 1.1046.8954 2 2 2h3.5M3 15c0-1.6569 1.3431-3 3-3s3 1.3431 3 3m-6 3c0 1.6569 1.3431 3 3 3s3-1.3431 3-3m-3-2v1" /></svg>;
const ForwardRef = forwardRef(FileLinkIcon);
export default createLucideIcon('FileLinkIcon', ForwardRef);
