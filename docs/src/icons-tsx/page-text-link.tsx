import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const PageTextLinkIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="M11.5 21H8c-1.6569 0-3-1.3431-3-3V6c0-1.6569 1.3431-3 3-3h8c1.6569 0 3 1.3431 3 3v2m-4 7c0-1.6569 1.3431-3 3-3s3 1.3431 3 3m-6 3c0 1.6569 1.3431 3 3 3s3-1.3431 3-3m-3-2v1M9 7h6m-6 4h2" /></svg>;
const ForwardRef = forwardRef(PageTextLinkIcon);
export default createLucideIcon('PageTextLinkIcon', ForwardRef);
