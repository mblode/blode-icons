import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const MacbookFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M3 6.5C3 4.567 4.567 3 6.5 3h11C19.433 3 21 4.567 21 6.5V15h1c.5523 0 1 .4477 1 1v1.5c0 1.933-1.567 3.5-3.5 3.5h-15C2.567 21 1 19.433 1 17.5V16c0-.5523.4477-1 1-1h1zM3 17v.5c0 .8284.6716 1.5 1.5 1.5h15c.8284 0 1.5-.6716 1.5-1.5V17z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(MacbookFilledIcon);
export default createLucideIcon('MacbookFilledIcon', ForwardRef);
