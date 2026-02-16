import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ArrowSplitDownIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 20h5v-5M4 15v5h5M12 12V4m0 8-7 7m7-7 7 7" /></svg>;
const ForwardRef = forwardRef(ArrowSplitDownIcon);
export default ForwardRef;
