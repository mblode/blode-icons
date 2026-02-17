import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Car10Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinejoin="round" strokeWidth={2} d="M4.5 17H4c-1.1046 0-2-.8954-2-2V8c0-1.6569 1.3432-3 3-3h6c1.1046 0 2 .8954 2 2h3.4174a4 4 0 0 1 3.2769 1.7061l1.5826 2.2609A4 4 0 0 1 22 13.2609V15c0 1.1046-.8954 2-2 2h-.5" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7v9.5M9.5 17h5" /><circle cx={7} cy={16.75} r={2.25} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /><circle cx={17} cy={16.75} r={2.25} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /></svg>;
const ForwardRef = forwardRef(Car10Icon);
export default ForwardRef;
