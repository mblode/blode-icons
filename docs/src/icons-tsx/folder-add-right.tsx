import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const FolderAddRightIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 10c0-1.6569-1.3431-3-3-3h-4.3944a3 3 0 0 1-2.4962-1.3359l-.2188-.3282A3 3 0 0 0 8.3945 4H6C4.3431 4 3 5.3431 3 7v9c0 1.6569 1.3431 3 3 3h5m7-5v3m0 0v3m0-3h-3m3 0h3" /></svg>;
const ForwardRef = forwardRef(FolderAddRightIcon);
export default createLucideIcon('FolderAddRightIcon', ForwardRef);
