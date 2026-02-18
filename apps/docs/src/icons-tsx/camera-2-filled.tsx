import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Camera2FilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M7.9998 5C8.9108 3.787 10.363 3 12 3s3.0891.787 4.0002 2H18c2.2091 0 4 1.7909 4 4v8c0 2.2091-1.7909 4-4 4H6c-2.2091 0-4-1.7909-4-4V9c0-2.2091 1.7909-4 4-4zM12 9c-1.933 0-3.5 1.567-3.5 3.5S10.067 16 12 16s3.5-1.567 3.5-3.5S13.933 9 12 9" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(Camera2FilledIcon);
export default createLucideIcon('Camera2FilledIcon', ForwardRef);
