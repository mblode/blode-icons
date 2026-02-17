import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ArrowWallUpIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m16.25 10.75-3.1893-3.1893c-.5858-.5858-1.5356-.5858-2.1213 0L7.75 10.75M12 21V8m7-5H5" /></svg>;
const ForwardRef = forwardRef(ArrowWallUpIcon);
export default createLucideIcon('ArrowWallUpIcon', ForwardRef);
