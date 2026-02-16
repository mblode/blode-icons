import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CirclePlaceholderDashedIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeDasharray="3 4" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9" /></svg>;
const ForwardRef = forwardRef(CirclePlaceholderDashedIcon);
export default ForwardRef;
