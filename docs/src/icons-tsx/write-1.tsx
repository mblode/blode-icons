import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Write1Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m5 18.9986 5.19-5.19M18 12l1.3787-1.3787c1.1716-1.1715 1.1716-3.071 0-4.2426l-1.7574-1.7574c-1.1716-1.1715-3.071-1.1715-4.2426 0L12 6m6 6-6-6m6 6-1.4288 3.9292a3 3 0 0 1-2.2075 1.9117L4 20 6.1591 9.6363a3 3 0 0 1 1.9117-2.2075L12 6m.7795 5.2191c.7166.7166.7166 1.8785 0 2.5951s-1.8785.7166-2.5951 0-.7166-1.8785 0-2.5951 1.8785-.7166 2.5951 0" /></svg>;
const ForwardRef = forwardRef(Write1Icon);
export default ForwardRef;
