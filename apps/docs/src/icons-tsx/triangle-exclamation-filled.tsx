import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const TriangleExclamationFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M8.6026 4.0709c1.5651-2.5177 5.2292-2.5177 6.7943 0l6.1027 9.8175c1.6564 2.6645-.2597 6.1117-3.3971 6.1117H5.897c-3.1374 0-5.0535-3.4472-3.3971-6.1117zM12 8c.5523 0 1 .4477 1 1v3c0 .5523-.4477 1-1 1s-1-.4477-1-1V9c0-.5523.4477-1 1-1m-1.25 7c0-.6904.5596-1.25 1.25-1.25s1.25.5596 1.25 1.25-.5596 1.25-1.25 1.25-1.25-.5596-1.25-1.25" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(TriangleExclamationFilledIcon);
export default createLucideIcon('TriangleExclamationFilledIcon', ForwardRef);
