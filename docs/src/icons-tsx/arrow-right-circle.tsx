import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ArrowRightCircleIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h8m0 0-3-3m3 3-3 3m8-3c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9" /></svg>;
const ForwardRef = forwardRef(ArrowRightCircleIcon);
export default ForwardRef;
