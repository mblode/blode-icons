import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ArrowUpDownLeftRightIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m8.9998 5.4998 1.9393-1.9394c.5858-.5857 1.5355-.5857 2.1213 0l1.9394 1.9394m-9.5 3.5L3.5604 10.939c-.5857.5858-.5857 1.5355 0 2.1213l1.9394 1.9394m13-6 1.9393 1.9393c.5858.5858.5858 1.5355 0 2.1213l-1.9393 1.9394m-3.5 3.5-1.9394 1.9393c-.5858.5858-1.5355.5858-2.1213 0l-1.9393-1.9393m3-14.5v8m0 0v8m0-8h-8m8 0h8" /></svg>;
const ForwardRef = forwardRef(ArrowUpDownLeftRightIcon);
export default createLucideIcon('ArrowUpDownLeftRightIcon', ForwardRef);
