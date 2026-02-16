import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const TapeIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.5 14h7M5 5h14c1.6569 0 3 1.3431 3 3v8c0 1.6569-1.3431 3-3 3H5c-1.6568 0-3-1.3431-3-3V8c0-1.6569 1.3432-3 3-3m4.9142 5.5858c.7811.781.7811 2.0474 0 2.8284-.781.7811-2.0474.7811-2.8284 0s-.781-2.0474 0-2.8284 2.0474-.781 2.8284 0m7 0c.7811.781.7811 2.0474 0 2.8284-.781.7811-2.0474.7811-2.8284 0-.7811-.781-.7811-2.0474 0-2.8284s2.0474-.781 2.8284 0" /></svg>;
const ForwardRef = forwardRef(TapeIcon);
export default ForwardRef;
