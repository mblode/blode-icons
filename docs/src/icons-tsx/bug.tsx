import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const BugIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 13v2c0 3.3137 2.6863 6 6 6s6-2.6863 6-6v-2M6 13H3m3 0v-2c0-1.6569 1.3431-3 3-3h6c1.6569 0 3 1.3431 3 3v2m0 0h3M6 17l-2.75 1M18 17l2.75 1M12 13v7M8 7.5V7c0-2.2091 1.7909-4 4-4s4 1.7909 4 4v.5M6.27 9 3.25 8M17.5 9l3.25-1" /></svg>;
const ForwardRef = forwardRef(BugIcon);
export default ForwardRef;
