import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ThumbsUpIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinejoin="round" strokeWidth={2} d="M7 11H4c-.5523 0-1 .4477-1 1v7c0 .5523.4477 1 1 1h3m0-9v9m0-9 4-8h.6156c1.2274 0 2.1652 1.0953 1.9761 2.3081L13.0161 9h5.047c1.818 0 3.2182 1.6041 2.9725 3.4053l-.6818 5C20.1511 18.8918 18.8815 20 17.3813 20H7" /></svg>;
const ForwardRef = forwardRef(ThumbsUpIcon);
export default ForwardRef;
