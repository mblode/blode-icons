import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CloudSimpleIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinejoin="round" strokeWidth={2} d="M17 19H9c-3.866 0-7-3.134-7-7s3.134-7 7-7c2.5628 0 4.8039 1.3772 6.0236 3.432.2648.446.7931.6812 1.3072.6124A5.05 5.05 0 0 1 17 9c2.7614 0 5 2.2386 5 5s-2.2386 5-5 5Z" /></svg>;
const ForwardRef = forwardRef(CloudSimpleIcon);
export default createLucideIcon('CloudSimpleIcon', ForwardRef);
