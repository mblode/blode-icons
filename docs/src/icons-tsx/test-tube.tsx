import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const TestTubeIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.0039 5 4.0008 15c-1.3811 1.3806-1.3813 3.6195-.0004 5.0004C5.3809 21.381 7.6192 21.3811 9 20.0008L19.0039 10m-5-5 5 5m-5-5L13 4m6.0039 6L20 11m-4.75 2h-8.5M20 6h.01M18.4 2.5h.2m.4 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" /></svg>;
const ForwardRef = forwardRef(TestTubeIcon);
export default createLucideIcon('TestTubeIcon', ForwardRef);
