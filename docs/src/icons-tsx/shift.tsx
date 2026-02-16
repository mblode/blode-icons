import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ShiftIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" strokeWidth={2} d="m2.404 11.2615 8.9217-8.1459a1 1 0 0 1 1.3486 0l8.9216 8.1459c.6743.6156.2388 1.7385-.6742 1.7385H17v4c0 1.6569-1.3431 3-3 3h-4c-1.6569 0-3-1.3431-3-3v-4H3.0783c-.913 0-1.3485-1.1229-.6742-1.7385Z" /></svg>;
const ForwardRef = forwardRef(ShiftIcon);
export default ForwardRef;
