import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const PhoneDynamicIslandIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5h2M9 22h6c1.6569 0 3-1.3431 3-3V5c0-1.6568-1.3431-3-3-3H9C7.3431 2 6 3.3432 6 5v14c0 1.6569 1.3431 3 3 3" /></svg>;
const ForwardRef = forwardRef(PhoneDynamicIslandIcon);
export default ForwardRef;
