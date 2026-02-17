import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const TextBlockIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5.5h7m-7 3h4m-4 7h7m-7 3h4M6 19c-1.1046 0-2-.8954-2-2s.8954-2 2-2 2 .8954 2 2-.8954 2-2 2M6 9c-1.1046 0-2-.8954-2-2s.8954-2 2-2 2 .8954 2 2-.8954 2-2 2" /></svg>;
const ForwardRef = forwardRef(TextBlockIcon);
export default ForwardRef;
