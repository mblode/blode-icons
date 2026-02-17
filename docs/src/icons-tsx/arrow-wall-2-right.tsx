import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ArrowWall2RightIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m14.5 7.75 3.1893 3.1893c.5858.5858.5858 1.5356 0 2.1213L14.5 16.25M4 12h13.25M20 5v14" /></svg>;
const ForwardRef = forwardRef(ArrowWall2RightIcon);
export default createLucideIcon('ArrowWall2RightIcon', ForwardRef);
