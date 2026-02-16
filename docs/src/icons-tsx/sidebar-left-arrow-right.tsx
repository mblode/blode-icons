import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SidebarLeftArrowRightIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 4H7C5.3431 4 4 5.3431 4 7v10c0 1.6569 1.3431 3 3 3h2M9 4h8c1.6569 0 3 1.3431 3 3v10c0 1.6569-1.3431 3-3 3H9M9 4v16" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m13.5 14 2-2-2-2" /></svg>;
const ForwardRef = forwardRef(SidebarLeftArrowRightIcon);
export default ForwardRef;
