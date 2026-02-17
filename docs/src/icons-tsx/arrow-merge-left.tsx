import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ArrowMergeLeftIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 20h5v-5M20 9V4h-5M12 12H4m8 0 7 7m-7-7 7-7" /></svg>;
const ForwardRef = forwardRef(ArrowMergeLeftIcon);
export default createLucideIcon('ArrowMergeLeftIcon', ForwardRef);
