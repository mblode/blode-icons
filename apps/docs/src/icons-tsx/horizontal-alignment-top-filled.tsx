import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const HorizontalAlignmentTopFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M4 3c-.5523 0-1 .4477-1 1s.4477 1 1 1h16c.5523 0 1-.4477 1-1s-.4477-1-1-1zM8.5 7C7.1193 7 6 8.1193 6 9.5v9C6 19.8807 7.1193 21 8.5 21s2.5-1.1193 2.5-2.5v-9C11 8.1193 9.8807 7 8.5 7M15.5 7C14.1193 7 13 8.1193 13 9.5v5c0 1.3807 1.1193 2.5 2.5 2.5s2.5-1.1193 2.5-2.5v-5C18 8.1193 16.8807 7 15.5 7" /></svg>;
const ForwardRef = forwardRef(HorizontalAlignmentTopFilledIcon);
export default createLucideIcon('HorizontalAlignmentTopFilledIcon', ForwardRef);
