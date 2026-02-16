import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SquareDotedBehindSquareIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 8v1m5-6h2m5 5v2m-5 5h-1m4-12c1.1046 0 2 .8954 2 2m0 8c0 1.1046-.8954 2-2 2M9 5c0-1.1046.8954-2 2-2m1.75 6h-7.5C4.0074 9 3 10.0074 3 11.25v7.5C3 19.9926 4.0074 21 5.25 21h7.5c1.2426 0 2.25-1.0074 2.25-2.25v-7.5C15 10.0074 13.9926 9 12.75 9" /></svg>;
const ForwardRef = forwardRef(SquareDotedBehindSquareIcon);
export default ForwardRef;
