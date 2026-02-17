import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const TennisIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeWidth={2} d="M6 5.2917C7.8412 6.9397 9 9.3345 9 12s-1.1588 5.0604-3 6.7083M6 5.2917C4.1588 6.9397 3 9.3345 3 12s1.1588 5.0604 3 6.7083M6 5.2917C7.5923 3.8666 9.695 3 12 3s4.4077.8666 6 2.2917M6 18.7083C7.5923 20.1334 9.695 21 12 21s4.4077-.8666 6-2.2917m0 0c-1.8412-1.6479-3-4.0428-3-6.7083s1.1588-5.0604 3-6.7083m0 13.4166c1.8412-1.6479 3-4.0428 3-6.7083s-1.1588-5.0604-3-6.7083" /></svg>;
const ForwardRef = forwardRef(TennisIcon);
export default ForwardRef;
